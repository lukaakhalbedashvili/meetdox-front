import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth'
import { useState } from 'react'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { LogInFormFields } from './logIn.interface'
import { auth } from '../../utils/firebase/init'

interface UseLoginProps {
  setIsLogInPopupOpen: (value: boolean) => void
}

const useLogIn = ({ setIsLogInPopupOpen }: UseLoginProps) => {
  const { setAlert } = useZustandStore()
  const [isLoading, setIsLoading] = useState(false)

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
          signInWithEmailAndPassword(auth, email, password).then(() => {
            setIsLogInPopupOpen(false)

            setIsLoading(false)

            setAlert({
              message: 'success',
              type: AlertType.SUCCESS,
              onClick: () => {},
              duration: 2000,
            })
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
