import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VerifyField } from './emailVerify.interface'
import { User } from '../registrationStages.interface'
import { registrationApiRequest } from '../../../utils/api/authentication'

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
      await registrationApiRequest(userInfo.email, userInfo.username, code)

      onClose()
      onLogInClickHandler()
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
