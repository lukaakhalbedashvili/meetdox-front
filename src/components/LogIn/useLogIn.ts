import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth'
import { useState } from 'react'
<<<<<<< Updated upstream
import { useSearchParams } from 'next/navigation'
=======
<<<<<<< Updated upstream
=======
import { useRouter, useSearchParams } from 'next/navigation'
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { LogInFormFields } from './logIn.interface'
import { auth } from '../../utils/firebase/init'

interface UseLoginProps {
  setIsLogInPopupOpen: (value: boolean) => void
}

const useLogIn = ({ setIsLogInPopupOpen }: UseLoginProps) => {
  const { setAlert, setLoggedInUser } = useZustandStore()
  const { refetch, data } = useFetchLoggedInUserData()
  const [isLoading, setIsLoading] = useState(false)
<<<<<<< Updated upstream
  const searchParams = useSearchParams()
  console.error(searchParams.get('redirect-to'))
=======
<<<<<<< Updated upstream
=======
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect-to')
  const router = useRouter()
>>>>>>> Stashed changes
>>>>>>> Stashed changes

  const LogInFormValidation = useFormik({
    initialValues: {
      [LogInFormFields.EMAIL]: '',
      [LogInFormFields.PASSWORD]: '',
      [LogInFormFields.REMEMBER_ME]: false,
    },

    validationSchema: Yup.object({
      [LogInFormFields.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .email('invalid email')
        .required('required'),

      [LogInFormFields.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),

      [LogInFormFields.REMEMBER_ME]: Yup.boolean(),
    }),

    onSubmit: async (values, { resetForm }) => {
      const { password, email, isRememberMe } = values
      setIsLoading(true)
      setPersistence(
        auth,
        isRememberMe ? browserLocalPersistence : browserSessionPersistence
      )
        .then(() => {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              setIsLogInPopupOpen(false)
              refetch()
              setIsLoading(false)
              setLoggedInUser(data?.data.data)
              setAlert({
                message: 'User logged in successfully',
                type: AlertType.SUCCESS,
                onClick: () => {},
                duration: 2000,
              })
              if (redirectTo) {
                router.push(redirectTo)
              }
            })
            .catch((err) => {
              if (err.code === 'auth/user-not-found') {
                setAlert({
                  message: 'User not found',
                  type: AlertType.ERROR,
                  onClick: () => {},
                  duration: 3000,
                })
                setIsLoading(false)
              } else if (err.code === 'auth/wrong-password') {
                setAlert({
                  message: 'Password is wrong',
                  type: AlertType.ERROR,
                  onClick: () => {},
                  duration: 3000,
                })
                setIsLoading(false)
              }
            })
        })
        .catch(() => {
          resetForm()
        })
    },
  })
  return { LogInFormValidation, isLoading }
}

export default useLogIn
