import React, { FC } from 'react'
import { FormikProps } from 'formik'
import DropDownInput from '@/elements/DropDownInput'
import { getNumberArray } from '@/utils/services/getNumberArray'
import TextArea from '@/elements/Textarea'
import Input from '@/elements/Input'
import {
  TeacherExperienceForm,
  TeacherExperienceInfoValidationFormInputNames,
} from './teacherExperience.interface'
import { BecomeExpertForm } from '../../becomeTeacher.interface'
import { ExperienceValidationKeys } from '../../utils'
import {
  currentlyJob,
  placeholderEndDate,
  placeholderStartDate,
} from '../../data'

interface TeacherExperienceFormSectionProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
  formKey: ExperienceValidationKeys
}

const TeacherExperienceFormSection: FC<TeacherExperienceFormSectionProps> = ({
  becomeExpertValidation,
  formKey,
}) => {
  const errorObject: TeacherExperienceForm = becomeExpertValidation.errors[
    formKey
  ] as unknown as TeacherExperienceForm

  const touchedObject: TeacherExperienceForm = becomeExpertValidation.touched[
    formKey
  ] as unknown as TeacherExperienceForm

  return (
    <div className="flex flex-col">
      <div className="mt-2 h-10">
        <Input
          placeholder={TeacherExperienceInfoValidationFormInputNames.COMPANY}
          type="text"
          value={becomeExpertValidation.values[formKey]?.company}
          name={`${formKey}.${TeacherExperienceInfoValidationFormInputNames.COMPANY}`}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherExperienceInfoValidationFormInputNames.COMPANY}`,
              e.target.value
            )
          }}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.company && errorObject?.company}
        />
      </div>

      <div className="mt-2 h-10">
        <Input
          placeholder={TeacherExperienceInfoValidationFormInputNames.POSITION}
          type="text"
          value={becomeExpertValidation.values[formKey]?.position}
          name={`${formKey}.${TeacherExperienceInfoValidationFormInputNames.POSITION}`}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherExperienceInfoValidationFormInputNames.POSITION}`,
              e.target.value
            )
          }}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.position && errorObject?.position}
        />
      </div>

      <div className="mt-2 h-36">
        <TextArea
          placeholder={
            TeacherExperienceInfoValidationFormInputNames.DESCRIPTION
          }
          value={becomeExpertValidation.values[formKey]?.description}
          name={`${formKey}.${TeacherExperienceInfoValidationFormInputNames.DESCRIPTION}`}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherExperienceInfoValidationFormInputNames.DESCRIPTION}`,
              e.target.value
            )
          }}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.description && errorObject?.description}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getNumberArray({})}
          name={`${formKey}.${TeacherExperienceInfoValidationFormInputNames.START_DATE}`}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.startDate && errorObject?.startDate}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherExperienceInfoValidationFormInputNames.START_DATE}`,
              e.target.value
            )
          }}
          value={becomeExpertValidation.values[formKey]?.startDate}
          placeHolderValue={placeholderStartDate}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={[...getNumberArray({}), currentlyJob]}
          name={`${formKey}.${TeacherExperienceInfoValidationFormInputNames.END_DATE}`}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.endDate && errorObject?.endDate}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherExperienceInfoValidationFormInputNames.END_DATE}`,
              e.target.value
            )
          }}
          value={becomeExpertValidation.values[formKey]?.endDate}
          placeHolderValue={placeholderEndDate}
        />
      </div>
    </div>
  )
}

export default TeacherExperienceFormSection
