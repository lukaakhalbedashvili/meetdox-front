import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import TextArea from '@/elements/Textarea'
import Input from '@/elements/Input'
import useTeacherExperience from './useTeacherExperienceFormSection'
import { TeacherEducationInfoValidationFormInputNames } from './teacherExperience.interface'
import { BecameTeacherSections } from '../../becameTeacher.interface'

interface TeacherExperienceFormSectioProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
}

const TeacherExperienceFormSection: FC<TeacherExperienceFormSectioProps> = ({
  isFormSubmitted,
  setErroredSections,
}) => {
  const {
    teacherExperienceValidation,
    placeholderStartDate,
    placeholderEndDate,
  } = useTeacherExperience(isFormSubmitted, setErroredSections)

  return (
    <div className="flex flex-col">
      <div className="mt-2 h-10">
        <Input
          placeholder={TeacherEducationInfoValidationFormInputNames.COMPANY}
          type="text"
          value={teacherExperienceValidation.values.company}
          name={TeacherEducationInfoValidationFormInputNames.COMPANY}
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
          placeholder={TeacherEducationInfoValidationFormInputNames.POSITION}
          type="text"
          value={teacherExperienceValidation.values.position}
          name={TeacherEducationInfoValidationFormInputNames.POSITION}
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
          placeholder={TeacherEducationInfoValidationFormInputNames.DESCRIPTION}
          value={teacherExperienceValidation.values.description}
          name={TeacherEducationInfoValidationFormInputNames.DESCRIPTION}
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
          name={TeacherEducationInfoValidationFormInputNames.START_DATE}
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
          name={TeacherEducationInfoValidationFormInputNames.END_DATE}
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
