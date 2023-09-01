import React, { FC } from 'react'
import { FormikProps } from 'formik'
import TextArea from '@/elements/Textarea'
import { AboutTeacherInputNames } from './AboutTeacher.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'

interface AboutTeacherProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const AboutTeacher: FC<AboutTeacherProps> = ({ becomeExpertValidation }) => {
  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5  sm:mx-12">
      <h2 className="text-xl">About you</h2>

      <div className="sm:w-1/2">
        <div className="mt-2 h-36">
          <TextArea
            placeholder={AboutTeacherInputNames.DESCRIPTION}
            value={becomeExpertValidation.values.description}
            name={AboutTeacherInputNames.DESCRIPTION}
            onChange={becomeExpertValidation.handleChange}
            onBlurHandler={becomeExpertValidation.handleBlur}
            errorMessage={
              becomeExpertValidation.touched.description &&
              becomeExpertValidation.errors.description
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AboutTeacher
