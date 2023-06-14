import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import { useGoogleAuth } from '@/utils/firebase/googleAuth'
import useLogIn from './useLogIn'
import { LogInFormFields } from './logIn.interface'

interface LogInProps {
  onClose: () => void
  onSignUpClickHandler: () => void
  onForgotPasswordClickHandler: () => void
  setIsLogInPopupOpen: (value: boolean) => void
}

const LogIn: FC<LogInProps> = ({
  onClose,
  onSignUpClickHandler,
  onForgotPasswordClickHandler,
  setIsLogInPopupOpen,
}) => {
  const { signInWithGoogle } = useGoogleAuth()
  const { LogInFormValidation, isLoading } = useLogIn({ setIsLogInPopupOpen })

  return (
    <div className=" h-full w-full rounded-md bg-white sm:h-[550px] sm:w-[400px]">
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="flex items-center justify-end">
            <FaTimes
              className="mr-3 mt-3 h-6 w-6 cursor-pointer"
              onClick={onClose}
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-2xl text-text_gray">Welcome!</h1>
          </div>
          <div className="mt-8 flex w-full justify-center">
            <Button customTailwindClasses="bg-transparent border-border_gray text-text_gray">
              <div
                className="flex h-[40px] w-[320px] items-center justify-center"
                onClick={signInWithGoogle}
              >
                <Image
                  src="/google_logo.png"
                  alt="Google Logo"
                  width={25}
                  height={25}
                />
                <p className="ml-5 flex items-center justify-center text-text_gray">
                  Sign in with Google
                </p>
              </div>
            </Button>
          </div>

          <div className="mt-5 flex w-full items-center justify-center">
            <div className="flex w-[320px] items-center justify-center">
              <div className="h-0.5 flex-1 bg-border_gray"></div>

              <div className="px-5 text-xs text-text_gray">
                Sign in with your Email
              </div>

              <div className="h-0.5 flex-1 bg-border_gray"></div>
            </div>
          </div>

          <div className="align-center flex w-full justify-center">
            <form
              className="mt-5 w-[320px]"
              onSubmit={LogInFormValidation.handleSubmit}
            >
              <p className="mb-1  text-sm text-text_gray ">Email Address</p>

              <div className="h-[44px]">
                <Input
                  type="email"
                  value={LogInFormValidation.values.email}
                  name={LogInFormFields.EMAIL}
                  onChange={LogInFormValidation.handleChange}
                  errorMessage={
                    LogInFormValidation.touched.email &&
                    LogInFormValidation.errors.email
                  }
                  onBlurHandler={LogInFormValidation.handleBlur}
                />
              </div>

              <p className="mb-1  mt-3 text-sm text-text_gray">Password</p>

              <div className="h-[44px]">
                <Input
                  type="password"
                  value={LogInFormValidation.values.password}
                  name={LogInFormFields.PASSWORD}
                  onChange={LogInFormValidation.handleChange}
                  errorMessage={
                    LogInFormValidation.touched.password &&
                    LogInFormValidation.errors.password
                  }
                  onBlurHandler={LogInFormValidation.handleBlur}
                />
              </div>

              <div className="mt-7 flex w-full items-center justify-between">
                <div className="flex items-center">
                  <input
                    autoComplete="off"
                    type="checkbox"
                    name={LogInFormFields.REMEMBER_ME}
                    onChange={LogInFormValidation.handleChange}
                    className="h-4 w-4 rounded-md border border-border_gray"
                  />

                  <p className="ml-2 text-sm text-text_gray">
                    Keep me logged in{' '}
                  </p>
                </div>

                <p
                  onClick={() => {
                    onClose()
                    onForgotPasswordClickHandler()
                  }}
                  className="cursor-pointer text-sm text-sky"
                >
                  Forgot Password?
                </p>
              </div>

              <div className="mt-7 h-12">
                <Button
                  type="submit"
                  customTailwindClasses="bg-sky border-sky text-white"
                >
                  <p className="flex h-[36px] w-[320px] items-center justify-center text-sm">
                    Log In
                  </p>
                </Button>
              </div>
            </form>
          </div>

          <div className="flex w-full items-center justify-center">
            <p className="mt-1 w-[320px] text-sm text-text_gray">
              {`Don't have an account?`}
              <span
                onClick={() => {
                  onClose()
                  onSignUpClickHandler()
                }}
                className="cursor-pointer text-sky"
              >
                {' '}
                &nbsp; Sign Up
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default LogIn
