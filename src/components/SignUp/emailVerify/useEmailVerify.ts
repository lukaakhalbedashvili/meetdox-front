import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VerifyField } from './emailVerify.interface'
import { User } from '../registrationStages.interface'

interface EmailVerifyProps {
  userInfo: User
  onClose: () => void
  onLogInClickHandler: () => void
}

const useEmailVerify = ({ onClose, onLogInClickHandler }: EmailVerifyProps) => {
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

    onSubmit: async () => {
      // http://localhost:8000/api/users/authentication/registration
      /*
      {
        "email": userInfo.email,
        "username": userInfo.username,
        "password": userInfo.password,
        "code": values.code
      */
      // if SUCCESS OPEN LOGIN POPUP
      onClose()
      onLogInClickHandler()
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
