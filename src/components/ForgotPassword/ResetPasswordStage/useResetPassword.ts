import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useResetPasswordQuery } from '@/reactQuery/authQueries/resetPassword'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { PasswordField } from './resetPassword.interface'

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
  const { setAlert } = useZustandStore()

  const { mutate, isPending } = useResetPasswordQuery()

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
      mutate(
        { email, code, password },
        {
          onSuccess: () => {
            setAlert({
              message: 'password is changed',
              type: AlertType.SUCCESS,
              onClick: () => {},
              duration: 3000,
            })
            onClose()
            onLoginClickHandler()
          },
        }
      )
    },
  })
  return { EmailVerifyCodeValidation, isPending }
}

export default useResetPassword
