import { useState } from 'react'
import { useSendEmailVerificationCodeQuery } from '@/reactQuery/authQueries/sendEmailVerificationCode'
import { VerifyEmailCodeType } from '@/utils/api/api.interface'
import { RegistrationStages, User } from './registrationStages.interface'

const useSignUp = () => {
  const [registrationStage, setRegistrationStage] =
    useState<RegistrationStages>(RegistrationStages.ACCOUNT_DETAILS)
  const [isResendClicked, setIsResendClicked] = useState<boolean>(false)

  const { mutate } = useSendEmailVerificationCodeQuery()

  const handleResend = async (email: string) => {
    if (!isResendClicked) {
      mutate({ email, type: VerifyEmailCodeType.REGISTRATION })
    }
    setIsResendClicked(true)
    setTimeout(() => {
      setIsResendClicked(false)
    }, 60000)
  }
  const [userInfo, setUserInfo] = useState<User>({
    email: '',
    username: '',
    password: '',
  })
  return {
    registrationStage,
    setRegistrationStage,
    userInfo,
    setUserInfo,
    handleResend,
    isResendClicked,
  }
}

export default useSignUp
