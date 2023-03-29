import React, { FC, useState } from 'react'
import SignUpStage from './signUp/signUp'
import EmailVerifyStage from './emailVerify/emailVerify'
import { RegistrationStages } from './registrationStages.interface'
interface SignUpProps {
  onClose: () => void
  onLogInClickHandler: () => void
}

const SignUp: FC<SignUpProps> = ({ onClose, onLogInClickHandler }) => {
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
        onLogInClickHandler={onLogInClickHandler}
      />
    )

  return (
    <EmailVerifyStage
      onClose={onClose}
      setRegistrationStage={() =>
        setRegistrationStage(RegistrationStages.ACCOUNT_DETAILS)
      }
      userInfo={userInfo}
      onLogInClickHandler={onLogInClickHandler}
    />
  )
}

export default SignUp
