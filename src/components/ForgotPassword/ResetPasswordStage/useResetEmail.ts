import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PasswordField } from './resetPassword.interface'
import { resetPassword } from '../../../utils/api/authentication'
interface ResetPasswordProps {
  code: string
  email: string
  onClose: () => void
  onLoginClickHandler: () => void
}

const useResetPassword = ({
  code,
  email,
  onClose,
  onLoginClickHandler,
}: ResetPasswordProps) => {
  const EmailVerifyCodeValidation = useFormik({
    initialValues: {
      [PasswordField.PASSWORD]: '',
      [PasswordField.CONFIRM_PASSWORD]: '',
    },

    validationSchema: Yup.object({
      [PasswordField.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),

      [PasswordField.CONFIRM_PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .oneOf([Yup.ref('password')], 'passwords must match')
        .required('required'),
    }),
    onSubmit: async (values) => {
      const { password } = values
      await resetPassword(email, code, password)
      onClose()
      onLoginClickHandler()
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useResetPassword
