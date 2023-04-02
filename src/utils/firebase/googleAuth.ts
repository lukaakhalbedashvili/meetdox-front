import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { auth } from './init'

const googleAuth = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result._tokenResponse.isNewUser) {
        // REQUEST POST TO CREATE NEW USER FROM GOOGLE
        // /authentication/google-registration
        // {
        //   "email": result.user.email,
        //   "displayName": result.user.displayName,
        //   "photoURL": result.user.photoURL,
        //   "uid": result.user.uid,
        // }
        // THEN RELOAD PAGE
      } else {
        window.location.reload()
      }
    })
    .catch((error) => {
      console.log(error)
    })

  return { googleAuth }
}

export default googleAuth
