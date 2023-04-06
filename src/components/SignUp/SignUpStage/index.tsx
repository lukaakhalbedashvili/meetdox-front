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
    <div className=" w-[400px] bg-white rounded-md h-[630px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-text_gray">Join Us!</h1>
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
              Sign up with Google
            </p>
          </div>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px]">
          <div className="flex-1 h-0.5 bg-border_gray"></div>
          <div className="px-5 text-xs text-text_gray">
            Sign up with your Email
          </div>
          <div className="flex-1 h-0.5 bg-border_gray"></div>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form
          className="mt-5 w-[320px]"
          onSubmit={SignUpFormValidation.handleSubmit}
        >
          <p className="text-sm  text-text_gray mb-1 ">Email Address</p>

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
          <p className="text-sm  text-text_gray mb-1 mt-3 ">Username</p>

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
          <p className="text-sm  text-text_gray mb-1 mt-3">Password</p>

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
          <p className="text-sm  text-text_gray mb-1 mt-3 ">Repeat Password</p>

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

          <div className="h-12 mt-7">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="text-sm flex items-center justify-center w-[320px] h-[36px]">
                Sign Up
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center">
        <p className="text-sm text-text_gray mt-1 w-[320px]">
          Already have an account?{' '}
          <span
            onClick={() => {
              onClose()
              onLogInClickHandler()
            }}
            className="text-sky cursor-pointer"
          >
            &nbsp; Log In
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignUpStage
