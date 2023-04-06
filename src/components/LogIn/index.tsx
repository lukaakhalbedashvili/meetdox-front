import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import { useGoogleAuth } from '@/utils/firebase/googleAuth'
import useLogIn from './useLogIn'
import { LogInFormFields } from './logIn.interface'

interface LogInProps {
  onClose: () => void
  onSignUpClickHandler: () => void
  onForgotPasswordClickHandler: () => void
}

const LogIn: FC<LogInProps> = ({
  onClose,
  onSignUpClickHandler,
  onForgotPasswordClickHandler,
}) => {
  const { signInWithGoogle } = useGoogleAuth()
  const { LogInFormValidation } = useLogIn()

  return (
    <div className=" w-[400px] bg-white rounded-md h-[550px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-text_gray">Welcome!</h1>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button customTailwindClasses="bg-transparent border-border_gray text-text_gray">
          <div
            className="flex items-center justify-center w-[320px] h-[40px]"
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
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px]">
          <div className="flex-1 h-0.5 bg-border_gray"></div>
          <div className="px-5 text-xs text-text_gray">
            Sign in with your Email
          </div>
          <div className="flex-1 h-0.5 bg-border_gray"></div>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form
          className="mt-5 w-[320px]"
          onSubmit={LogInFormValidation.handleSubmit}
        >
          <p className="text-sm  text-text_gray mb-1 ">Email Address</p>

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
            ></Input>
          </div>
          <p className="text-sm  text-text_gray mb-1 mt-3">Password</p>

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
            ></Input>
          </div>
          <div className="flex items-center justify-between w-full mt-7">
            <div className="flex items-center">
              <input
                type="checkbox"
                name={LogInFormFields.REMEMBER_ME}
                onChange={LogInFormValidation.handleChange}
                className="w-4 h-4 border border-border_gray rounded-md"
              />
              <p className="text-sm text-text_gray ml-2">Keep me logged in </p>
            </div>
            <p
              onClick={() => {
                onClose()
                onForgotPasswordClickHandler()
              }}
              className="text-sm text-sky cursor-pointer"
            >
              Forgot Password?
            </p>
          </div>

          <div className="h-12 mt-7">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="text-sm flex items-center justify-center w-[320px] h-[36px]">
                Log In
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center">
        <p className="text-sm text-text_gray mt-1 w-[320px]">
          {`Don't have an account?`}
          <span
            onClick={() => {
              onClose()
              onSignUpClickHandler()
            }}
            className="text-sky cursor-pointer"
          >
            {' '}
            &nbsp; Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default LogIn
