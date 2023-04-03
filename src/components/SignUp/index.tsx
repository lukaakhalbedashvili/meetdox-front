import React, { FC } from 'react'
import SignUpStage from './SignUpStage'
import EmailVerifyStage from './EmailVerify'
import { RegistrationStages } from './registrationStages.interface'
import useSignUp from './useSignUp'

interface SignUpProps {
  onClose: () => void
  onLogInClickHandler: () => void
}

const SignUp: FC<SignUpProps> = ({ onClose, onLogInClickHandler }) => {
  const {
    registrationStage,
    setRegistrationStage,
    setUserInfo,
    userInfo,
    handleResend,
    isResendClicked,
  } = useSignUp()

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
      isResendClicked={isResendClicked}
      handleResend={(email) => handleResend(email)}
    />
  )
}

export default SignUp
