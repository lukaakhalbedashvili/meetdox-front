import React, { FC } from 'react'
import { FormikProps } from 'formik'
import DropDownInput from '@/elements/DropDownInput'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { getNumberArray } from '@/utils/services/getNumberArray'
import useTeacherEducation from './useTeacherEducationFormSection'
import {
  TeacherEducationInfoValidationForm,
  TeacherEducationInfoValidationFormInputNames,
} from './teacherEducation.interface'
import { BecomeExpertForm } from '../../becomeTeacher.interface'
import { EducationValidationKeys } from '../../utils'
import {
  currentlyAttending,
  placeholderEndDate,
  placeholderStartDate,
} from '../../data'

interface TeacherEducationFormSectionProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
  formKey: EducationValidationKeys
}
const TeacherEducationFormSection: FC<TeacherEducationFormSectionProps> = ({
  becomeExpertValidation,
  formKey,
}) => {
  const {
    collegeSearchResults,
    onCollegeChange,
    onMajorChange,
    majorSearchResults,
  } = useTeacherEducation(becomeExpertValidation, formKey)

  //every key in Formik validationSchema has error object as a string.
  //  even if it's object, like in this case

  const errorObject: TeacherEducationInfoValidationForm = becomeExpertValidation
    .errors[formKey] as unknown as TeacherEducationInfoValidationForm

  const touchedObject: TeacherEducationInfoValidationForm =
    becomeExpertValidation.touched[
      formKey
    ] as unknown as TeacherEducationInfoValidationForm

  return (
    <div className="flex flex-col">
      <div className="mt-2">
        <TypeAheadInput
          onBlurHandler={becomeExpertValidation.handleBlur}
          value={becomeExpertValidation.values[formKey]?.university}
          onChange={(e) => onCollegeChange(e, formKey)}
          name={`${formKey}.${TeacherEducationInfoValidationFormInputNames.UNIVERSITY}`}
          results={collegeSearchResults}
          onSelect={(value) =>
            becomeExpertValidation.setFieldValue(
              TeacherEducationInfoValidationFormInputNames.UNIVERSITY,
              value
            )
          }
          errorMessage={touchedObject?.university && errorObject?.university}
          placeHolder={TeacherEducationInfoValidationFormInputNames.UNIVERSITY}
        />
      </div>

      <div className=" mt-2">
        <TypeAheadInput
          placeHolder={TeacherEducationInfoValidationFormInputNames.MAJOR}
          onBlurHandler={becomeExpertValidation.handleBlur}
          value={becomeExpertValidation.values[formKey]?.major}
          onChange={(e) => onMajorChange(e, formKey)}
          name={`${formKey}.${TeacherEducationInfoValidationFormInputNames.MAJOR}`}
          results={majorSearchResults}
          onSelect={(value) =>
            becomeExpertValidation.setFieldValue(
              TeacherEducationInfoValidationFormInputNames.MAJOR,
              value
            )
          }
          errorMessage={touchedObject?.major && errorObject?.major}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={getNumberArray({})}
          name={`${formKey}.${TeacherEducationInfoValidationFormInputNames.START_DATE}`}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.startDate && errorObject?.startDate}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherEducationInfoValidationFormInputNames.START_DATE}`,
              e.target.value
            )
          }}
          value={becomeExpertValidation.values[formKey]?.startDate}
          placeHolderValue={placeholderStartDate}
        />
      </div>

      <div className="mt-2 h-10">
        <DropDownInput
          options={[...getNumberArray({}), currentlyAttending]}
          name={`${formKey}.${TeacherEducationInfoValidationFormInputNames.END_DATE}`}
          onBlurHandler={becomeExpertValidation.handleBlur}
          errorMessage={touchedObject?.endDate && errorObject?.endDate}
          onChange={(e) => {
            becomeExpertValidation.setFieldValue(
              `${formKey}.${TeacherEducationInfoValidationFormInputNames.END_DATE}`,
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

export default TeacherEducationFormSection
