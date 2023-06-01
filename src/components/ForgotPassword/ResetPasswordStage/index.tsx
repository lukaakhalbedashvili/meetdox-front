import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'
import { FaTimes } from 'react-icons/fa'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useResetPassword from './useResetPassword'
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
  const { EmailVerifyCodeValidation, isPending } = useResetPassword({
    onClose,
    onLoginClickHandler,
    email,
    code,
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
          <div className="flex items-center justify-end">
            <FaTimes
              className="mr-3 mt-3 h-6 w-6 cursor-pointer"
              onClick={onClose}
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-xl text-text_gray">Reset your Password!</h1>
          </div>

          <div className="mt-5 flex w-full items-center justify-center">
            <div className="flex w-[320px] items-center justify-center text-center">
              <small className="text-text_gray">
                Please enter your new password below.
              </small>
            </div>
          </div>

          <div className="align-center flex w-full justify-center">
            <form
              className="mt-5 w-[320px]"
              onSubmit={EmailVerifyCodeValidation.handleSubmit}
            >
              <p className="mb-1  mt-3 text-sm text-text_gray">Password</p>

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
                />
              </div>

              <p className="mb-1  mt-3 text-sm text-text_gray ">
                Repeat Password
              </p>

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
                />
              </div>

              <div className="mt-8 h-12">
                <Button
                  type="submit"
                  customTailwindClasses="bg-sky border-sky text-white"
                >
                  <p className="flex h-[36px] w-[320px] items-center justify-center text-sm">
                    Reset Password
                  </p>
                </Button>
              </div>
            </form>
          </div>

          <div className="flex w-full items-center justify-center"></div>
        </>
      )}
    </div>
  )
}

export default ResetPasswordStage
