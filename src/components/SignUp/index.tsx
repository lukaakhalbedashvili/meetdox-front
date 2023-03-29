import React, { FC, useState } from 'react'
import SignUpStage from './signUp/signUp'
import EmailVerifyStage from './emailVerify/emailVerify'
import { RegistrationStages } from './registrationStages.interface'
interface SignUpProps {
  onClose: () => void
}

const SignUp: FC<SignUpProps> = ({ onClose }) => {
  const [registrationStage, setRegistrationStage] =
    useState<RegistrationStages>(RegistrationStages.ACCOUNT_DETAILS)

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
  })

  if (registrationStage === RegistrationStages.ACCOUNT_DETAILS)
    return (
      <SignUpStage
        onClose={onClose}
        setRegistrationStage={() =>
          setRegistrationStage(RegistrationStages.EMAIL_VERIFY)
        }
        setUserInfo={setUserInfo}
      />
    )

  return (
    <EmailVerifyStage
      onClose={onClose}
      setRegistrationStage={() =>
        setRegistrationStage(RegistrationStages.ACCOUNT_DETAILS)
      }
      userInfo={userInfo}
    />
  )
}

export default SignUp
