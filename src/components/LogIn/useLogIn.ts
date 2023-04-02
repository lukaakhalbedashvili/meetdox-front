import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth'
import { LogInFormFields } from './logIn.interface'
import { auth } from '../../utils/firebase/init'

const useLogIn = () => {
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

      setPersistence(
        auth,
        isRememberMe ? browserLocalPersistence : browserSessionPersistence
      )
        .then(() => {
          signInWithEmailAndPassword(auth, email, password).then(() => {
            // refresh page
            window.location.reload()
          })
        })
        .catch(() => {
          resetForm()
          // NOTIFICATION: INCORRECT EMAIL OR PASSWORD
        })
    },
  })
  return { LogInFormValidation }
}

export default useLogIn
