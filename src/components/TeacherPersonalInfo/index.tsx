'use client'
import React from 'react'
import Input from '@/elements/Input'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import { months } from '@/data/teachersDummyData'
import useTeacherPersonalInfo from './useTeacherPersonalInfo'
import { TeacherPersonalInfoFormInputNames } from './teacherPersonalInfo.interface'

const TeacherPersonalInfo = () => {
  const {
    teacherPersonalInfoValidation,
    placeholderBirthMonth,
    placeholderBirthYear,
  } = useTeacherPersonalInfo()

  return (
    <div>
      <h2>Personal details</h2>
      <div className="flex items-center">
        <div className="h-10 w-1/4">
          <Input
            placeholder="First Name"
            type="text"
            onChange={teacherPersonalInfoValidation.handleChange}
            name={TeacherPersonalInfoFormInputNames.NAME}
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
            name={TeacherPersonalInfoFormInputNames.MIDDLE_NAME}
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
            name={TeacherPersonalInfoFormInputNames.LAST_NAME}
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
            name={TeacherPersonalInfoFormInputNames.BIRTH_MONTH}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.birthMonth &&
              teacherPersonalInfoValidation.errors.birthMonth
            }
            onChange={teacherPersonalInfoValidation.handleChange}
            value={teacherPersonalInfoValidation.values.birthMonth}
            placeHolderValue={placeholderBirthMonth}
          />
        </div>

        <div className="h-10">
          <DropDownInput
            options={getAgeRange()}
            name={TeacherPersonalInfoFormInputNames.BIRTH_YEAR}
            onBlurHandler={teacherPersonalInfoValidation.handleBlur}
            errorMessage={
              teacherPersonalInfoValidation.touched.birthYear &&
              teacherPersonalInfoValidation.errors.birthYear
            }
            onChange={teacherPersonalInfoValidation.handleChange}
            value={teacherPersonalInfoValidation.values.birthYear}
            placeHolderValue={placeholderBirthYear}
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherPersonalInfo
