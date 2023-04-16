'use client'
import React from 'react'
import Input from '@/elements/Input'
import DropDownInput from '@/elements/DropDownInput'
import { months, years } from '@/data/teachersDummyData'
import useTeacherPersonalInfo from './useTeacherPersonalInfo'
import { TeacherPersonalInfoFormInputs } from './teacherPersonalInfo.interface'

const TeacherPersonalInfo = () => {
  const { teacherPersonalInfoValidation } = useTeacherPersonalInfo()

  return (
    <div>
      <h2>Personal details</h2>
      <div className="flex items-center">
        <div className="h-10 w-1/4">
          <Input
            placeholder="First Name"
            type="text"
            onChange={teacherPersonalInfoValidation.handleChange}
            name={TeacherPersonalInfoFormInputs.NAME}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.name &&
              teacherPersonalInfoValidation.errors.name
            }
            value={teacherPersonalInfoValidation.values.name}
          />
        </div>

        <div className="h-10 w-1/4">
          <Input
            placeholder="Middle Name"
            type="text"
            onChange={teacherPersonalInfoValidation.handleChange}
            name={TeacherPersonalInfoFormInputs.MIDDLE_NAME}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.middleName &&
              teacherPersonalInfoValidation.errors.middleName
            }
            value={teacherPersonalInfoValidation.values.middleName}
          />
        </div>

        <div className="h-10 w-1/4">
          <Input
            placeholder="Last Name"
            type="text"
            onChange={teacherPersonalInfoValidation.handleChange}
            name={TeacherPersonalInfoFormInputs.LAST_NAME}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.lastName &&
              teacherPersonalInfoValidation.errors.lastName
            }
            value={teacherPersonalInfoValidation.values.lastName}
          />
        </div>

        <div className="h-10">
          <DropDownInput
            options={months}
            name={TeacherPersonalInfoFormInputs.BIRTH_MONTH}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.birthMonth &&
              teacherPersonalInfoValidation.errors.birthMonth
            }
            onChange={(value) =>
              teacherPersonalInfoValidation.setFieldValue(
                TeacherPersonalInfoFormInputs.BIRTH_MONTH,
                value.target.value
              )
            }
            value={teacherPersonalInfoValidation.values.birthMonth}
          />
        </div>

        <div className="h-10">
          <DropDownInput
            options={years}
            name={TeacherPersonalInfoFormInputs.BIRTH_YEAR}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.birthYear &&
              teacherPersonalInfoValidation.errors.birthYear
            }
            onChange={(value) =>
              teacherPersonalInfoValidation.setFieldValue(
                TeacherPersonalInfoFormInputs.BIRTH_YEAR,
                value.target.value
              )
            }
            value={teacherPersonalInfoValidation.values.birthMonth}
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherPersonalInfo
