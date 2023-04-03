import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth'

import { auth } from './init'
import { googleRegistrationApiRequest } from '../api/authentication'

interface GoogleAuthResponse {
  _tokenResponse: {
    isNewUser: boolean
  }
  user: {
    email: string
    displayName: string
    photoURL: string
    uid: string
  }
}

const googleAuth = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result: GoogleAuthResponse | UserCredential) => {
      if ('_tokenResponse' in result && result._tokenResponse.isNewUser) {
        googleRegistrationApiRequest(
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          result.user.uid
        ).then(() => {
          window.location.reload()
        })
      } else {
        window.location.reload()
      }
    })
    .catch(() => {})

  return { googleAuth }
}

export default googleAuth
