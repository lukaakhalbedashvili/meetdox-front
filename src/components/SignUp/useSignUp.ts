import { useState } from 'react'
import { RegistrationStages, User } from './registrationStages.interface'
import { sendEmailCodeApiRequest } from '../../utils/api/authentication'

const useSignUp = () => {
  const [registrationStage, setRegistrationStage] =
    useState<RegistrationStages>(RegistrationStages.ACCOUNT_DETAILS)
  const [isResendClicked, setIsResendClicked] = useState<boolean>(false)

  const handleResend = async (email: string) => {
    if (!isResendClicked) {
      await sendEmailCodeApiRequest(email, 'registration')
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
