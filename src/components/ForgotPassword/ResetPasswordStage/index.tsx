import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useResetPassword from './useResetEmail'
import { PasswordField } from './resetPassword.interface'

interface ResetPasswordStageProps {
  onClose: () => void
  onLoginClickHandler: () => void
  email: string
  code: string
}

const ResetPasswordStage: FC<ResetPasswordStageProps> = ({
  onClose,
  onLoginClickHandler,
  email,
  code,
}) => {
  const { EmailVerifyCodeValidation } = useResetPassword({
    onClose,
    onLoginClickHandler,
    email,
    code,
  })

  return (
    <div className=" w-[400px] bg-white rounded-md h-[420px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Reset your Password!</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px] text-center">
          <small className="text-text_gray">
            Please enter your new password below.
          </small>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form
          className="mt-5 w-[320px]"
          onSubmit={EmailVerifyCodeValidation.handleSubmit}
        >
          <p className="text-sm  text-text_gray mb-1 mt-3">Password</p>

          <div className="h-[44px]">
            <Input
              type="password"
              value={EmailVerifyCodeValidation.values.password}
              name={PasswordField.PASSWORD}
              onChange={EmailVerifyCodeValidation.handleChange}
              errorMessage={
                EmailVerifyCodeValidation.touched.password &&
                EmailVerifyCodeValidation.errors.password
              }
              onBlurHandler={EmailVerifyCodeValidation.handleBlur}
            ></Input>
          </div>
          <p className="text-sm  text-text_gray mb-1 mt-3 ">Repeat Password</p>

          <div className="h-[44px] ">
            <Input
              type="password"
              value={EmailVerifyCodeValidation.values.confirmPassword}
              name={PasswordField.CONFIRM_PASSWORD}
              onChange={EmailVerifyCodeValidation.handleChange}
              errorMessage={
                EmailVerifyCodeValidation.touched.confirmPassword &&
                EmailVerifyCodeValidation.errors.confirmPassword
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
                Reset Password
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center"></div>
    </div>
  )
}

export default ResetPasswordStage
