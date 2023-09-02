import React, { FC } from 'react'
import { FormikProps } from 'formik'
import Input from '@/elements/Input'
import useTeacherCompensation from './useTeacherCompensation'
import { TeacherCompensationFieldsNames } from './teacherCompensation.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'

interface TeacherCompensationProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherCompensation: FC<TeacherCompensationProps> = ({
  becomeExpertValidation,
}) => {
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
            value={
              becomeExpertValidation.values.perHour
                ? becomeExpertValidation.values.perHour.toString()
                : ''
            }
            name={TeacherCompensationFieldsNames.PER_HOUR}
            onChange={becomeExpertValidation.handleChange}
            onBlurHandler={becomeExpertValidation.handleBlur}
            errorMessage={
              becomeExpertValidation.touched.perHour &&
              becomeExpertValidation.errors.perHour
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherCompensation
