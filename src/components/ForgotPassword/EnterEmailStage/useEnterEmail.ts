import { useFormik } from 'formik'
import * as Yup from 'yup'
import { EnterEmailField } from './enterEmail.interface'
import { ForgotPasswordStages } from '../forgot.interface'
import { sendEmailCodeApiRequest } from '../../../utils/api/authentication'

interface EnterEmailProps {
  setEmail(email: string): void
  setForgotPasswordStage(stage: ForgotPasswordStages): void
}

const useEnterEmail = ({
  setEmail,
  setForgotPasswordStage,
}: EnterEmailProps) => {
  const EmailValidation = useFormik({
    initialValues: {
      [EnterEmailField.EMAIL]: '',
    },

    validationSchema: Yup.object({
      [EnterEmailField.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .email('invalid email')
        .required('required'),
    }),

    onSubmit: async (values) => {
      const { email } = values
      await sendEmailCodeApiRequest(email, 'forgot-password')
      setEmail(email)
      setForgotPasswordStage(ForgotPasswordStages.EMAIL_VERIFY)
    },
  })
  return { EmailValidation }
}

export default useEnterEmail
