import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SignUpFormFields } from './signUp.interface'
import { RegistrationStages } from '../registrationStages.interface'
interface SignupProps {
  setRegistrationStage: Dispatch<SetStateAction<RegistrationStages>>
  setUserInfo: Dispatch<
    SetStateAction<{
      email: string
      username: string
      password: string
    }>
  >
}

const useSignup = ({ setRegistrationStage, setUserInfo }: SignupProps) => {
  const SignUpFormValidation = useFormik({
    initialValues: {
      [SignUpFormFields.EMAIL]: '',
      [SignUpFormFields.USERNAME]: '',
      [SignUpFormFields.PASSWORD]: '',
      [SignUpFormFields.CONFIRM_PASSWORD]: '',
    },

    validationSchema: Yup.object({
      [SignUpFormFields.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .email('invalid email')
        .required('required'),

      [SignUpFormFields.USERNAME]: Yup.string()
        .max(35, 'must be less than 35')
        .min(3, 'must be more than 2')
        .matches(/^[a-zA-Z0-9]+$/, 'only letters and numbers')
        .required('required'),

      [SignUpFormFields.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),

      [SignUpFormFields.CONFIRM_PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .oneOf([Yup.ref('password')], 'passwords must match')
        .required('required'),
    }),

    onSubmit: async (values) => {
      const { email, username, password } = values

      setUserInfo({ email, username, password })
      setRegistrationStage(RegistrationStages.EMAIL_VERIFY)

      // http://localhost:8000/api/users/authentication/verify-email
      /*
      {
        "email": email
      }
      */
    },
  })
  return { SignUpFormValidation }
}

export default useSignup
