import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { getNumberArray } from '@/utils/services/getNumberArray'
import { TeacherEducation as TeacherEduType } from '@/components/Catalog/catalog.interface'
import useTeacherEducation from './useTeacherEducationFormSection'
import { TeacherEducationInfoValidationFormInputNames } from './teacherEducation.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../../becomeTeacher.interface'

interface TeacherEducationFormSectionProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
  formId: number
  defaultValue?: TeacherEduType
}

const TeacherEducationFormSection: FC<TeacherEducationFormSectionProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
  formId,
  defaultValue,
}) => {
  const {
    teacherEducationInfoValidation,
    collegeSearchResults,
    onCollegeChange,
    onMajorChange,
    majorSearchResults,
    placeholderStartDate,
    placeholderEndDate,
    CurrentlyAttending,
  } = useTeacherEducation(
    isFormSubmitted,
    setErroredSections,
    setFormValues,
    formId,
    defaultValue
  )

  return (
    <div className="flex flex-col">
      <div className="mt-2">
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

      <div className=" mt-2">
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
          options={getNumberArray({})}
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
          options={[...getNumberArray({}), CurrentlyAttending]}
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
