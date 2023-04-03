import React, { Dispatch, FC, SetStateAction } from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useEnterEmail from './useEnterEmail'
import { EnterEmailField } from './enterEmail.interface'
import { ForgotPasswordStages } from '../forgot.interface'

interface EnterEmailStageProps {
  onClose: () => void
  setForgotPasswordStage: Dispatch<SetStateAction<ForgotPasswordStages>>
  setEmail: Dispatch<SetStateAction<string>>
  onLogInClickHandler: () => void
}

const EnterEmailStage: FC<EnterEmailStageProps> = ({
  onClose,
  setEmail,
  onLogInClickHandler,
  setForgotPasswordStage,
}) => {
  const { EmailValidation } = useEnterEmail({
    setEmail,
    setForgotPasswordStage,
  })

  return (
    <div className=" w-[400px] bg-white rounded-md h-[350px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Reset your password</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px] text-center">
          <small className="text-text_gray">
            Please enter your email address and we&apos;ll send you a code to
            reset your password.
          </small>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form
          className="mt-5 w-[320px]"
          onSubmit={EmailValidation.handleSubmit}
        >
          <div className="h-[44px]">
            <Input
              type="email"
              value={EmailValidation.values.email}
              name={EnterEmailField.EMAIL}
              onChange={EmailValidation.handleChange}
              errorMessage={
                EmailValidation.touched.email && EmailValidation.errors.email
              }
              onBlurHandler={EmailValidation.handleBlur}
            ></Input>
          </div>

          <div className="h-12 mt-8">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="text-sm flex items-center justify-center w-[320px] h-[36px]">
                Submit
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-start w-full justify-center">
        {' '}
        <div className="flex items-start justify-start w-[320px] mt-7">
          <div className="flex items-center">
            <p className="text-sm text-text_gray mr-2">Back to</p>

            <p
              onClick={() => {
                onClose()
                onLogInClickHandler()
              }}
              className="text-sm text-sky cursor-pointer"
            >
              Log In
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterEmailStage
