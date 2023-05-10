import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import TextArea from '@/elements/Textarea'
import Input from '@/elements/Input'
import useTeacherExperience from './useTeacherExperienceFormSection'
import { TeacherExperienceInfoValidationFormInputNames } from './teacherExperience.interface'
import {
  BecameTeacherSections,
  FormValues,
} from '../../becameTeacher.interface'

interface TeacherExperienceFormSectioProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
  formId: number
}

const TeacherExperienceFormSection: FC<TeacherExperienceFormSectioProps> = ({
  isFormSubmitted,
  setErroredSections,
  formId,
  setFormValues,
}) => {
  const {
    teacherExperienceValidation,
    placeholderStartDate,
    placeholderEndDate,
  } = useTeacherExperience(
    isFormSubmitted,
    setErroredSections,
    formId,
    setFormValues
  )

  return (
    <div className="flex flex-col">
      <div className="mt-2 h-10">
        <Input
          placeholder={TeacherExperienceInfoValidationFormInputNames.COMPANY}
          type="text"
          value={teacherExperienceValidation.values.company}
          name={TeacherExperienceInfoValidationFormInputNames.COMPANY}
          onChange={teacherExperienceValidation.handleChange}
          onBlurHandler={teacherExperienceValidation.handleBlur}
          errorMessage={
            teacherExperienceValidation.touched.company &&
            teacherExperienceValidation.errors.company
          }
        />
      </div>

      <div className="mt-2 h-10">
        <Input
          placeholder={TeacherExperienceInfoValidationFormInputNames.POSITION}
          type="text"
          value={teacherExperienceValidation.values.position}
          name={TeacherExperienceInfoValidationFormInputNames.POSITION}
          onChange={teacherExperienceValidation.handleChange}
          onBlurHandler={teacherExperienceValidation.handleBlur}
          errorMessage={
            teacherExperienceValidation.touched.position &&
            teacherExperienceValidation.errors.position
          }
        />
      </div>

      <div className="mt-2 h-36">
        <TextArea
          placeholder={
            TeacherExperienceInfoValidationFormInputNames.DESCRIPTION
          }
          value={teacherExperienceValidation.values.description}
          name={TeacherExperienceInfoValidationFormInputNames.DESCRIPTION}
          onChange={teacherExperienceValidation.handleChange}
          onBlurHandler={teacherExperienceValidation.handleBlur}
          errorMessage={
            teacherExperienceValidation.touched.description &&
            teacherExperienceValidation.errors.description
          }
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getAgeRange()}
          name={TeacherExperienceInfoValidationFormInputNames.START_DATE}
          onBlurHandler={teacherExperienceValidation.handleBlur}
          errorMessage={
            teacherExperienceValidation.touched.startDate &&
            teacherExperienceValidation.errors.startDate
          }
          onChange={teacherExperienceValidation.handleChange}
          value={teacherExperienceValidation.values.startDate}
          placeHolderValue={placeholderStartDate}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getAgeRange()}
          name={TeacherExperienceInfoValidationFormInputNames.END_DATE}
          onBlurHandler={teacherExperienceValidation.handleBlur}
          errorMessage={
            teacherExperienceValidation.touched.endDate &&
            teacherExperienceValidation.errors.endDate
          }
          onChange={teacherExperienceValidation.handleChange}
          value={teacherExperienceValidation.values.endDate}
          placeHolderValue={placeholderEndDate}
        />
      </div>
    </div>
  )
}

export default TeacherExperienceFormSection
