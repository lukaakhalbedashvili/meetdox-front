import React from 'react'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import TypeAheadInput from '@/elements/TypeAheadInput'
import useTeacherEducation from './useTeacherEducationFormSection'
import { TeacherEducationInfoValidationFormInputNames } from './teacherEducation.interface'

const TeacherEducationFormSection = () => {
  const {
    teacherEducationInfoValidation,
    collegeSearchResults,
    onCollegeChange,
    onMajorChange,
    majorSearchResults,
    placeholderStartDate,
    placeholderEndDate,
  } = useTeacherEducation()

  return (
    <div className="flex flex-col">
      <div className="mr-2 mt-2 w-96">
        <TypeAheadInput
          onBlurHandler={teacherEducationInfoValidation.handleBlur}
          value={teacherEducationInfoValidation.values.university}
          onChange={onCollegeChange}
          name={TeacherEducationInfoValidationFormInputNames.UNIVERSITY}
          results={collegeSearchResults}
          onSelect={(value) =>
            teacherEducationInfoValidation.setFieldValue(
              TeacherEducationInfoValidationFormInputNames.UNIVERSITY,
              value
            )
          }
          errorMessage={
            teacherEducationInfoValidation.touched.university &&
            teacherEducationInfoValidation.errors.university
          }
          placeHolder={TeacherEducationInfoValidationFormInputNames.UNIVERSITY}
        />
      </div>

      <div className="mr-2 mt-2 w-96">
        <TypeAheadInput
          placeHolder={TeacherEducationInfoValidationFormInputNames.MAJOR}
          onBlurHandler={teacherEducationInfoValidation.handleBlur}
          value={teacherEducationInfoValidation.values.major}
          onChange={onMajorChange}
          name={TeacherEducationInfoValidationFormInputNames.MAJOR}
          results={majorSearchResults}
          onSelect={(value) =>
            teacherEducationInfoValidation.setFieldValue(
              TeacherEducationInfoValidationFormInputNames.MAJOR,
              value
            )
          }
          errorMessage={
            teacherEducationInfoValidation.touched.major &&
            teacherEducationInfoValidation.errors.major
          }
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getAgeRange()}
          name={TeacherEducationInfoValidationFormInputNames.START_DATE}
          onBlurHandler={teacherEducationInfoValidation.handleBlur}
          errorMessage={
            teacherEducationInfoValidation.touched.startDate &&
            teacherEducationInfoValidation.errors.startDate
          }
          onChange={teacherEducationInfoValidation.handleChange}
          value={teacherEducationInfoValidation.values.startDate}
          placeHolderValue={placeholderStartDate}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getAgeRange()}
          name={TeacherEducationInfoValidationFormInputNames.END_DATE}
          onBlurHandler={teacherEducationInfoValidation.handleBlur}
          errorMessage={
            teacherEducationInfoValidation.touched.endDate &&
            teacherEducationInfoValidation.errors.endDate
          }
          onChange={teacherEducationInfoValidation.handleChange}
          value={teacherEducationInfoValidation.values.endDate}
          placeHolderValue={placeholderEndDate}
        />
      </div>
    </div>
  )
}

export default TeacherEducationFormSection
