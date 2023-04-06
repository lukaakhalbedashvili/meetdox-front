import { useState } from 'react'
import { VerifyEmailCodeType } from '@/utils/api/api.interface'
import { ForgotPasswordStages } from './forgot.interface'
import { sendEmailCodeApiRequest } from '../../utils/api/authentication'

const useForgotPassword = () => {
  const [forgotPasswordStage, setForgotPasswordStage] =
    useState<ForgotPasswordStages>(ForgotPasswordStages.ENTER_EMAIL)

  const [email, setEmail] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [isResendClicked, setIsResendClicked] = useState<boolean>(false)

  const handleResend = async (email: string) => {
    if (!isResendClicked) {
      await sendEmailCodeApiRequest(email, VerifyEmailCodeType.FORGOT_PASSWORD)
    }
    setIsResendClicked(true)
    setTimeout(() => {
      setIsResendClicked(false)
    }, 60000)
  }

  return {
    forgotPasswordStage,
    setForgotPasswordStage,
    email,
    setEmail,
    code,
    setCode,
    newPassword,
    setNewPassword,
    isResendClicked,
    handleResend,
  }
}

export default useForgotPassword
