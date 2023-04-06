import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth'
import { useRegisterGoogleUserQuery } from '@/reactQuery/authQueries/registerGoogleUser'
import { auth } from './init'

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

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider()
  const { mutate } = useRegisterGoogleUserQuery()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: GoogleAuthResponse | UserCredential) => {
        if ('_tokenResponse' in result && result._tokenResponse.isNewUser) {
          try {
            mutate({
              displayName: result?.user.displayName,
              email: result?.user.email,
              photoURL: result?.user.photoURL,
              uid: result?.user.uid,
            })
            window.location.reload()
          } catch (error) {
            console.error(error)
          }
        } else {
          window.location.reload()
        }
      })
      .catch(() => {})
  }
  return { signInWithGoogle }
}
