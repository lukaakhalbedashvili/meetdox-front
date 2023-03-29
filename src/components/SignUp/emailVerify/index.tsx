import React, { Dispatch, FC, SetStateAction } from 'react'
import { FaTimes, FaArrowLeft } from 'react-icons/fa'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useEmailVerify from './useEmailVerify'
import { VerifyField } from './emailVerify.interface'
import { RegistrationStages, User } from '../registrationStages.interface'

interface EmailVerifyStageProps {
  onClose: () => void
  setRegistrationStage: Dispatch<SetStateAction<RegistrationStages>>
  userInfo: User
  onLogInClickHandler: () => void
}

const EmailVerifyStage: FC<EmailVerifyStageProps> = ({
  onClose,
  setRegistrationStage,
  userInfo,
  onLogInClickHandler,
}) => {
  const { EmailVerifyCodeValidation } = useEmailVerify({
    userInfo,
    onClose,
    onLogInClickHandler,
  })

  return (
    <div className=" w-[400px] bg-white rounded-md h-[420px] ">
      <div className="flex justify-between items-center">
        <FaArrowLeft
          className="w-6 h-6 ml-3 mt-3 cursor-pointer"
          onClick={() =>
            setRegistrationStage(RegistrationStages.ACCOUNT_DETAILS)
          }
        />
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Verify your Email Address!</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px] text-center">
          <small className="text-text_gray">
            We have sent a verification code to your email address. Please enter
            the code below to verify your email address.
          </small>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
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
            ></Input>
          </div>

          <div className="h-12 mt-8">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="text-sm flex items-center justify-center w-[320px] h-[36px]">
                Verify
              </p>
            </Button>
          </div>
          <div className="mt-3">
            <small className="text-text_gray text-center">
              {" Didn't receive the code? "}
              <span className="text-sky cursor-pointer"> &nbsp; Resend</span>
            </small>
          </div>
          <div className="mt-3">
            <small className="text-text_gray text-center">
              By clicking verify you agree to our
              <span className="text-sky cursor-pointer">Terms of Service</span>
              and
              <span className="text-sky cursor-pointer">Privacy Policy</span>
            </small>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center"></div>
    </div>
  )
}

export default EmailVerifyStage
