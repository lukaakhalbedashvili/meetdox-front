import React, { Dispatch, FC, SetStateAction } from 'react'
import { FaTimes, FaArrowLeft } from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useEmailVerify from './useEmailVerifyInSignup'
import { VerifyField } from './emailVerify.interface'
import { RegistrationStages, User } from '../registrationStages.interface'

interface EmailVerifyStageProps {
  onClose: () => void
  setRegistrationStage: Dispatch<SetStateAction<RegistrationStages>>
  userInfo: User
  onLogInClickHandler: () => void
  isResendClicked: boolean
  handleResend: (email: string) => void
}

const EmailVerifyStage: FC<EmailVerifyStageProps> = ({
  onClose,
  setRegistrationStage,
  userInfo,
  onLogInClickHandler,
  isResendClicked,
  handleResend,
}) => {
  const { EmailVerifyCodeValidation, isPending } = useEmailVerify({
    userInfo,
    onClose,
    onLogInClickHandler,
  })

  return (
    <div className=" h-[420px] w-[400px] rounded-md bg-white ">
      {isPending && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {!isPending && (
        <>
          {' '}
          <div className="flex items-center justify-between">
            <FaArrowLeft
              className="ml-3 mt-3 h-6 w-6 cursor-pointer"
              onClick={() =>
                setRegistrationStage(RegistrationStages.ACCOUNT_DETAILS)
              }
            />
            <FaTimes
              className="mr-3 mt-3 h-6 w-6 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-xl text-text_gray">
              Verify your Email Address!
            </h1>
          </div>
          <div className="mt-5 flex w-full items-center justify-center">
            <div className="flex w-[320px] items-center justify-center text-center">
              <small className="text-text_gray">
                We have sent a verification code to your email address. Please
                enter the code below to verify your email address.
              </small>
            </div>
          </div>
          <div className="align-center flex w-full justify-center">
            <form
              className="mt-5 w-[320px]"
              onSubmit={EmailVerifyCodeValidation.handleSubmit}
            >
              <div className="h-[44px]">
                <Input
                  type="username"
                  value={EmailVerifyCodeValidation.values.code}
                  name={VerifyField.CODE}
                  onChange={EmailVerifyCodeValidation.handleChange}
                  errorMessage={
                    EmailVerifyCodeValidation.touched.code &&
                    EmailVerifyCodeValidation.errors.code
                  }
                  onBlurHandler={EmailVerifyCodeValidation.handleBlur}
                />
              </div>

              <div className="mt-8 h-12">
                <Button
                  type="submit"
                  customTailwindClasses="bg-sky border-sky text-white"
                >
                  <p className="flex h-[36px] w-[320px] items-center justify-center text-sm">
                    Verify
                  </p>
                </Button>
              </div>

              <div className="mt-3">
                <small className="text-center text-text_gray">
                  {" Didn't receive the code? "}
                  <span
                    className={
                      !isResendClicked ? 'cursor-pointer text-sky' : 'text-gray'
                    }
                    onClick={() => {
                      if (!isResendClicked) handleResend(userInfo.email)
                    }}
                  >
                    {' '}
                    &nbsp; Resend
                  </span>
                </small>
              </div>

              <div className="mt-3">
                <small className="text-center text-text_gray">
                  By clicking verify you agree to our &nbsp;
                  <span className="cursor-pointer text-sky">
                    Terms of Service{' '}
                  </span>
                  &nbsp; and &nbsp;
                  <span className="cursor-pointer text-sky">
                    Privacy Policy
                  </span>
                </small>
              </div>
            </form>
          </div>
          <div className="flex w-full items-center justify-center"></div>
        </>
      )}
    </div>
  )
}

export default EmailVerifyStage
