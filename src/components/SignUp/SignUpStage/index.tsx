import React, { Dispatch, FC, SetStateAction } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import { useGoogleAuth } from '@/utils/firebase/googleAuth'
import useSignUp from './useSignUpStage'
import { SignUpFormFields } from './signUp.interface'
import { RegistrationStages, User } from '../registrationStages.interface'

interface SignUpStageProps {
  onClose: () => void
  onLogInClickHandler: () => void
  setRegistrationStage: Dispatch<SetStateAction<RegistrationStages>>
  setUserInfo: Dispatch<SetStateAction<User>>
}

const SignUpStage: FC<SignUpStageProps> = ({
  onClose,
  onLogInClickHandler,
  setRegistrationStage,
  setUserInfo,
}) => {
  const { SignUpFormValidation } = useSignUp({
    setRegistrationStage,
    setUserInfo,
  })

  const { signInWithGoogle } = useGoogleAuth()

  return (
    <div className=" h-[630px] w-[400px] rounded-md bg-white ">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-text_gray">Join Us!</h1>
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
              Sign up with Google
            </p>
          </div>
        </Button>
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <div className="flex w-[320px] items-center justify-center">
          <div className="h-0.5 flex-1 bg-border_gray"></div>
          <div className="px-5 text-xs text-text_gray">
            Sign up with your Email
          </div>
          <div className="h-0.5 flex-1 bg-border_gray"></div>
        </div>
      </div>

      <div className="align-center flex w-full justify-center">
        <form
          className="mt-5 w-[320px]"
          onSubmit={SignUpFormValidation.handleSubmit}
        >
          <p className="mb-1  text-sm text-text_gray ">Email Address</p>

          <div className="h-[44px]">
            <Input
              type="email"
              value={SignUpFormValidation.values.email}
              name={SignUpFormFields.EMAIL}
              onChange={SignUpFormValidation.handleChange}
              errorMessage={
                SignUpFormValidation.touched.email &&
                SignUpFormValidation.errors.email
              }
              onBlurHandler={SignUpFormValidation.handleBlur}
            ></Input>
          </div>
          <p className="mb-1  mt-3 text-sm text-text_gray ">Username</p>

          <div className="h-[44px]">
            <Input
              type="username"
              value={SignUpFormValidation.values.username}
              name={SignUpFormFields.USERNAME}
              onChange={SignUpFormValidation.handleChange}
              errorMessage={
                SignUpFormValidation.touched.username &&
                SignUpFormValidation.errors.username
              }
              onBlurHandler={SignUpFormValidation.handleBlur}
            ></Input>
          </div>
          <p className="mb-1  mt-3 text-sm text-text_gray">Password</p>

          <div className="h-[44px]">
            <Input
              type="password"
              value={SignUpFormValidation.values.password}
              name={SignUpFormFields.PASSWORD}
              onChange={SignUpFormValidation.handleChange}
              errorMessage={
                SignUpFormValidation.touched.password &&
                SignUpFormValidation.errors.password
              }
              onBlurHandler={SignUpFormValidation.handleBlur}
            ></Input>
          </div>
          <p className="mb-1  mt-3 text-sm text-text_gray ">Repeat Password</p>

          <div className="h-[44px] ">
            <Input
              type="password"
              value={SignUpFormValidation.values.confirmPassword}
              name={SignUpFormFields.CONFIRM_PASSWORD}
              onChange={SignUpFormValidation.handleChange}
              errorMessage={
                SignUpFormValidation.touched.confirmPassword &&
                SignUpFormValidation.errors.confirmPassword
              }
              onBlurHandler={SignUpFormValidation.handleBlur}
            ></Input>
          </div>

          <div className="mt-7 h-12">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="flex h-[36px] w-[320px] items-center justify-center text-sm">
                Sign Up
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="mt-1 w-[320px] text-sm text-text_gray">
          Already have an account?{' '}
          <span
            onClick={() => {
              onClose()
              onLogInClickHandler()
            }}
            className="cursor-pointer text-sky"
          >
            &nbsp; Log In
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignUpStage
