import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VerifyField } from './emailVerify.interface'

interface EmailVerifyProps {
  userInfo: {
    email: string
    username: string
    password: string
  }
}

const useEmailVerify = ({ userInfo }: EmailVerifyProps) => {
  const EmailVerifyCodeValidation = useFormik({
    initialValues: {
      [VerifyField.CODE]: '',
    },

    validationSchema: Yup.object({
      [VerifyField.CODE]: Yup.string()
        .max(35, 'must be less than 35')
        .min(4, 'must be more than 3')
        .required('required'),
    }),

    onSubmit: async (values) => {
      // http://localhost:8000/api/users/authentication/registration
      /*
      {
        "email": userInfo.email,
        "username": userInfo.username,
        "password": userInfo.password,
        "code": values.code
      */
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
