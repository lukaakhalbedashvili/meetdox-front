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
    <div className=" w-[550px] bg-white rounded-md h-[700px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-4xl">Join Us!</h1>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button
          bgColor={'transparent'}
          borderColor={'border_gray'}
          textColor={'black'}
          // onClickHandler={() => console.log(true)}
        >
          <div className="flex items-center justify-center w-[450px] h-[50px]">
            <Image
              src="/google_logo.png"
              alt="Google Logo"
              width={30}
              height={30}
            />
            <p className="ml-5 flex items-center justify-center">
              Sign up with Google
            </p>
          </div>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="flex justify-center items-center w-[450px]">
          <div className="flex-1 h-0.5 bg-border_gray"></div>
          <div className="px-5">Sign up with your Email</div>
          <div className="flex-1 h-0.5 bg-border_gray"></div>
        </div>
      </div>

      <div className="w-full flex justify-center align-center">
        <form className="mt-5 w-[450px]">
          <p className="text-lg  text-black mb-1 ">Email Address</p>

          <div className="h-[60px]">
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
          <p className="text-lg  text-black mb-1 mt-5">Password</p>

          <div className="h-[60px]">
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
          <p className="text-lg  text-black mb-1 mt-5 ">Repeat Password</p>

          <div className="h-[60px] ">
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

          <div className="h-12 mt-8">
            <Button bgColor={'sky'} textColor={'white'} borderColor={'sky'}>
              <p className="text-xl flex items-center justify-center w-[450px] h-[50px]">
                Sign Up
              </p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center w-full justify-center">
        <p className="text-lg text-black mt-8 w-[450px]">
          Already have an account?{' '}
          <span className="text-sky cursor-pointer"> &nbsp; Log In</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
