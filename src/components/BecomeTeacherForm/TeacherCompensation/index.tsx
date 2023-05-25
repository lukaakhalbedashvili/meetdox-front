import React, { Dispatch, FC, SetStateAction } from 'react'
import Input from '@/elements/Input'
import useTeacherCompensation from './useTeacherCompensation'
import { TeacherCompensationFieldsNames } from './teacherCompensation.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface TeacherCompensationProps {
  setFormValues: Dispatch<SetStateAction<FormValues>>
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
}

const TeacherCompensation: FC<TeacherCompensationProps> = ({
  setFormValues,
  isFormSubmitted,
  setErroredSections,
}) => {
  const { teacherCompensationValidation } = useTeacherCompensation(
    setFormValues,
    isFormSubmitted,
    setErroredSections
  )
  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Compensation</h2>

      <div className="sm:flex sm:w-1/4 sm:items-center">
        <div className="relative mt-2 h-10 sm:mr-2 sm:w-2/3">
          <p className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform text-sm">
            $ / hr
          </p>

          <Input
            placeholder="Compensation"
            type="number"
            value={teacherCompensationValidation.values.compensation}
            name={TeacherCompensationFieldsNames.COMPENSATION}
            onChange={teacherCompensationValidation.handleChange}
            onBlurHandler={teacherCompensationValidation.handleBlur}
            errorMessage={
              teacherCompensationValidation.touched.compensation &&
              teacherCompensationValidation.errors.compensation
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherCompensation
