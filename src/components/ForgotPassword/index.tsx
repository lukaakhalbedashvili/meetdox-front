import React, { FC } from 'react'
// import SignUpStage from './SignUpStage'
// import EmailVerifyStage from './EmailVerify'
import useForgotPassword from './useForgot'
import { ForgotPasswordStages } from './forgot.interface'
import EnterEmailStage from './EnterEmailStage'
import EmailVerifyStage from './EmailVerifyStage'
import ResetPasswordStage from './ResetPasswordStage'

interface ForgotPasswordProps {
  onClose: () => void
  onLogInClickHandler: () => void
}

const ForgotPassword: FC<ForgotPasswordProps> = ({
  onClose,
  onLogInClickHandler,
}) => {
  const {
    forgotPasswordStage,
    setForgotPasswordStage,
    email,
    setEmail,
    code,
    setCode,
    isResendClicked,
    handleResend,
  } = useForgotPassword()

  if (forgotPasswordStage === ForgotPasswordStages.ENTER_EMAIL) {
    return (
      <EnterEmailStage
        onClose={onClose}
        setForgotPasswordStage={() =>
          setForgotPasswordStage(ForgotPasswordStages.EMAIL_VERIFY)
        }
        setEmail={setEmail}
        onLogInClickHandler={onLogInClickHandler}
      />
    )
  } else if (forgotPasswordStage === ForgotPasswordStages.EMAIL_VERIFY) {
    return (
      <EmailVerifyStage
        email={email}
        onClose={onClose}
        setForgotPasswordStage={() =>
          setForgotPasswordStage(ForgotPasswordStages.RESET_PASSWORD)
        }
        setPrevStage={() =>
          setForgotPasswordStage(ForgotPasswordStages.ENTER_EMAIL)
        }
        isResendClicked={isResendClicked}
        handleResend={(email) => handleResend(email)}
        setCode={setCode}
      />
    )
  } else if (forgotPasswordStage === ForgotPasswordStages.RESET_PASSWORD)
    return (
      <ResetPasswordStage
        onClose={onClose}
        onLoginClickHandler={onLogInClickHandler}
        email={email}
        code={code}
      />
    )
  else {
    return <h1>ERROR</h1>
  }
}

export default ForgotPassword
