import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdOutlineDone } from 'react-icons/md'
import NeoBrutButton from '@/elements/NeoBrutButton'
import Input from '@/elements/Input'
import useSignUp from './useSignUp'
import { SignUpFormFields } from './signUp.interface'

interface SignUpProps {
  onClose: () => void
}

const SignUp: FC<SignUpProps> = ({ onClose }) => {
  const { SignUpFormValidation } = useSignUp()

  return (
    <div className=" w-[450px] bg-bubblegum rounded-md h-[600px] ">
      <div className="flex justify-end items-center">
        <FaTimes
          className="w-6 h-6 mr-3 mt-3 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center mt-8">
        <h1 className="text-2xl font-extrabold">SignUp</h1>
      </div>

      <form className="pl-4 pr-4 mt-10">
        <div className="h-12">
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
          >
            <AiOutlineMail className="h-7 w-7" />
          </Input>
        </div>

        <div className="h-12 mt-4">
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
          >
            <RiLockPasswordLine className="h-7 w-7" />
          </Input>
        </div>

        <div className="h-12 mt-4">
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
          >
            <MdOutlineDone className="h-7 w-7" />
          </Input>
        </div>

        <div className="h-12 mt-20">
          <NeoBrutButton>
            <p>asx</p>
          </NeoBrutButton>
        </div>
      </form>
    </div>
  )
}

export default SignUp
