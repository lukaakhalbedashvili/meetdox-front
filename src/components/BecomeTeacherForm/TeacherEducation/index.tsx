'use client'

import { FormikProps } from 'formik'
import { FC, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Button from '@/elements/Button'
import TeacherEducationFormSection from './TeacherEducationFormSection'
import { BecomeExpertForm } from '../becomeTeacher.interface'
import { EducationValidationKeys } from '../utils'
import { placeholderEndDate, placeholderStartDate } from '../data'

interface TeacherEducationProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherEducation: FC<TeacherEducationProps> = ({
  becomeExpertValidation,
}) => {
  const educations = [
    EducationValidationKeys.TEACHER_EDUCATION0,
    EducationValidationKeys.TEACHER_EDUCATION1,
    EducationValidationKeys.TEACHER_EDUCATION2,
  ]

  const [activeFormCount, setActiveFormCount] = useState<number>(0)

  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Education details</h2>

      {educations.map((item, index) => {
        return (
          becomeExpertValidation.values[item] && (
            <div key={item} className=" border-border_gray pt-2">
              <div className="relative mt-6 sm:w-1/2">
                <div
                  className="absolute -top-6 right-0 bg-white"
                  onClick={() => {
                    becomeExpertValidation.setFieldValue(
                      educations[index],
                      undefined
                    )
                    setActiveFormCount(activeFormCount - 1)
                  }}
                >
                  <IoIosClose className="h-7 w-7 cursor-pointer" />
                </div>

                <TeacherEducationFormSection
                  becomeExpertValidation={becomeExpertValidation}
                  formKey={item}
                />
              </div>
            </div>
          )
        )
      })}

      <Button
        type="button"
        customTailwindClasses="bg-sky border-sky text-white mt-3"
        onClickHandler={() => {
          if (activeFormCount > 2) return

          becomeExpertValidation.setFieldValue(educations[activeFormCount], {
            id: '',
            university: '',
            major: '',
            startDate: placeholderStartDate,
            endDate: placeholderEndDate,
          })
          setActiveFormCount(activeFormCount + 1)
        }}
        isDisabled={activeFormCount > 2}
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          {becomeExpertValidation.values.teacherEducation0?.startDate
            ? 'Add more'
            : 'Add'}
        </p>
      </Button>
    </div>
  )
}

export default TeacherEducation
