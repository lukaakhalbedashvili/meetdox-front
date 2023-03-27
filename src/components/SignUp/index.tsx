import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useSignUp from './useSignUp'
import { SignUpFormFields } from './signUp.interface'

interface SignUpProps {
  onClose: () => void
}

const SignUp: FC<SignUpProps> = ({ onClose }) => {
  const { SignUpFormValidation } = useSignUp()

  return (
    <div className=" w-[400px] bg-white rounded-md h-[550px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl">Join Us!</h1>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button
          customTailwindClasses="bg-transparent border-border_gray text-black"
          // onClickHandler={() => console.log(true)}
        >
          <div className="flex items-center justify-center w-[320px] h-[40px]">
            <Image
              src="/google_logo.png"
              alt="Google Logo"
              width={25}
              height={25}
            />
            <p className="ml-5 flex items-center justify-center">
              Sign up with Google
            </p>
          </div>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[320px]">
          <div className="flex-1 h-0.5 bg-border_gray"></div>
          <div className="px-5 text-xs">Sign up with your Email</div>
          <div className="flex-1 h-0.5 bg-border_gray"></div>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form className="mt-5 w-[320px]">
          <p className="text-sm  text-black mb-1 ">Email Address</p>

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
          <p className="text-sm  text-black mb-1 mt-3">Password</p>

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
          <p className="text-sm  text-black mb-1 mt-3 ">Repeat Password</p>

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
            <Button customTailwindClasses="bg-sky border-sky text-white">
              <p className="text-sm flex items-center justify-center w-[320px] h-[36px]">
                Sign Up
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center">
        <p className="text-sm text-black mt-1 w-[320px]">
          Already have an account?{' '}
          <span className="text-sky cursor-pointer"> &nbsp; Log In</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
