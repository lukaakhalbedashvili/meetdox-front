import React, { Dispatch, FC, SetStateAction } from 'react'
import TextArea from '@/elements/Textarea'

import { AboutTeacherInputNames } from './AboutTeacher.interface'
import useAboutTeacher from './useAboutTeacher'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface AboutTeacherProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
  defaultValue?: string
}

const AboutTeacher: FC<AboutTeacherProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
  defaultValue,
}) => {
  const { aboutTeacherValidation } = useAboutTeacher({
    isFormSubmitted,
    setErroredSections,
    setFormValues,
    defaultValue,
  })
  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5  sm:mx-12">
      <h2 className="text-xl">About you</h2>

      <div className="sm:w-1/2">
        <div className="mt-2 h-36">
          <TextArea
            placeholder={AboutTeacherInputNames.DESCRIPTION}
            value={aboutTeacherValidation.values.description}
            name={AboutTeacherInputNames.DESCRIPTION}
            onChange={aboutTeacherValidation.handleChange}
            onBlurHandler={aboutTeacherValidation.handleBlur}
            errorMessage={
              aboutTeacherValidation.touched.description &&
              aboutTeacherValidation.errors.description
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AboutTeacher
