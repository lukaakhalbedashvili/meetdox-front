import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth'
import { useRouter, useSearchParams } from 'next/navigation'
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
  const { setIsLogInPopupOpen, setLoggedInUser, setIsSignupPopupOpen } =
    useZustandStore()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect-to')
  const router = useRouter()

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
          setIsLogInPopupOpen(false)
          setIsSignupPopupOpen(false)

          refetch().then(() => {
            if (data?.data.data) {
              setLoggedInUser(data?.data.data)
            }
          })

          if (redirectTo) {
            router.push(redirectTo)
          }
        }
      })
      .catch(() => {})
  }
  return { signInWithGoogle }
}
