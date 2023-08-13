import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth'
import { useRegisterGoogleUserQuery } from '@/reactQuery/authQueries/registerGoogleUser'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { useZustandStore } from '@/zustand'
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
  const { refetch, data } = useFetchLoggedInUserData()
  const { setIsLogInPopupOpen, setLoggedInUser } = useZustandStore()

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

            refetch()
          } catch (error) {
            console.error(error)
          }
        } else {
          refetch()
          setIsLogInPopupOpen(false)
          setLoggedInUser(data?.data.data)
        }
      })
      .catch(() => {})
  }
  return { signInWithGoogle }
}
