import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCheckForgotPasswordCode } from '@/reactQuery/authQueries/checkForgotPasswordCode'
import { VerifyField } from './emailVerify.interface'
import { ForgotPasswordStages } from '../forgot.interface'

interface EmailVerifyProps {
  setCode: (code: string) => void
  setForgotPasswordStage: (stage: ForgotPasswordStages) => void
  email: string
}

const useEmailVerify = ({
  setCode,
  setForgotPasswordStage,
  email,
}: EmailVerifyProps) => {
  const { mutate } = useCheckForgotPasswordCode()
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
      const { code } = values
      mutate(
        { code, email },
        {
          onSuccess: () => {
            setForgotPasswordStage(ForgotPasswordStages.RESET_PASSWORD)
            setCode(code)
          },
        }
      )
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
