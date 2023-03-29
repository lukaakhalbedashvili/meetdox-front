import { useState } from 'react'
import { RegistrationStages, User } from './registrationStages.interface'

const useSignUp = () => {
  const [registrationStage, setRegistrationStage] =
    useState<RegistrationStages>(RegistrationStages.ACCOUNT_DETAILS)

  const [userInfo, setUserInfo] = useState<User>({
    email: '',
    username: '',
    password: '',
  })
  return { registrationStage, setRegistrationStage, userInfo, setUserInfo }
}

export default useSignUp
