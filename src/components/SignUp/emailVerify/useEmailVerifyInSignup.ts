import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRegisterUserQuery } from '@/reactQuery/authQueries/registerUser'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { VerifyField } from './emailVerify.interface'
import { User } from '../registrationStages.interface'

interface EmailVerifyProps {
  userInfo: User
  onClose: () => void
  onLogInClickHandler: () => void
}

const useEmailVerify = ({
  userInfo,
  onClose,
  onLogInClickHandler,
}: EmailVerifyProps) => {
  const { setAlert } = useZustandStore()
  const { mutate } = useRegisterUserQuery()

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
      mutate(
        {
          email: userInfo.email,
          username: userInfo.username,
          code: values[VerifyField.CODE],
        },
        {
          onSuccess: () => {
            setAlert({
              message: 'user created successfully',
              type: AlertType.SUCCESS,
              onClick: () => {},
              duration: 3000,
            })
            onClose()
            onLogInClickHandler()
          },
          onError: (error) => {
            setAlert({
              message: error.response.data.message,
              type: AlertType.ERROR,
              onClick: () => {},
              duration: 3000,
            })
          },
        }
      )
    },
  })

  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
