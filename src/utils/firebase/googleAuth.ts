import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { auth } from './init'

const googleAuth = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result._tokenResponse.isNewUser) {
        // FIRSTLY INITALIZE USER DATA
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
