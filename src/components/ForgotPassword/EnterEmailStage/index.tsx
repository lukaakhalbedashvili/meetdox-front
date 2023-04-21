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
    <div className=" h-[350px] w-[400px] rounded-md bg-white ">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Reset your password</h1>
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <div className="flex w-[320px] items-center justify-center text-center">
          <small className="text-text_gray ">
            Please enter your email address and we&apos;ll send you a code to
            reset your password.
          </small>
        </div>
      </div>

      <div className="align-center flex w-full justify-center">
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

          <div className="mt-8 h-12">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="flex h-[36px] w-[320px] items-center justify-center text-sm">
                Submit
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex w-full items-start justify-center">
        {' '}
        <div className="mt-7 flex w-[320px] items-start justify-start">
          <div className="flex items-center">
            <p className="mr-2 text-sm text-text_gray">Back to</p>

            <p
              onClick={() => {
                onClose()
                onLogInClickHandler()
              }}
              className="cursor-pointer text-sm text-sky"
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
