'use client'
import { FC, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FormikProps } from 'formik'
import Button from '@/elements/Button'
import TeacherExperienceFormSection from './TeacherExperienceFormSection'
import { BecomeExpertForm } from '../becomeTeacher.interface'
import { ExperienceValidationKeys } from '../utils'
import { placeholderEndDate, placeholderStartDate } from '../data'

interface TeacherExperienceProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const experiences = [
  ExperienceValidationKeys.TEACHER_EXPERIENCE0,
  ExperienceValidationKeys.TEACHER_EXPERIENCE1,
  ExperienceValidationKeys.TEACHER_EXPERIENCE2,
  ExperienceValidationKeys.TEACHER_EXPERIENCE3,
  ExperienceValidationKeys.TEACHER_EXPERIENCE4,
  ExperienceValidationKeys.TEACHER_EXPERIENCE5,
]

const TeacherExperience: FC<TeacherExperienceProps> = ({
  becomeExpertValidation,
}) => {
  const [activeFormCount, setActiveFormCount] = useState<number>(0)

  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5  sm:mx-12">
      <h2 className="text-xl">Experience details</h2>

      {experiences.map((item) => {
        return (
          becomeExpertValidation?.values[item] && (
            <div
              key={item}
              className="relative mt-8  border-border_gray pt-2 sm:w-1/2"
            >
              <div
                className="absolute -top-4 right-0 bg-white"
                onClick={() => {}}
              >
                <IoIosClose className="h-7 w-7 cursor-pointer" />
              </div>

              <TeacherExperienceFormSection
                becomeExpertValidation={becomeExpertValidation}
                formKey={item}
              />
            </div>
          )
        )
      })}

      <Button
        type="button"
        customTailwindClasses="bg-sky border-sky text-white mt-3"
        onClickHandler={() => {
          if (activeFormCount > experiences.length - 1) return

          becomeExpertValidation.setFieldValue(experiences[activeFormCount], {
            company: '',
            position: '',
            description: '',
            startDate: placeholderStartDate,
            endDate: placeholderEndDate,
            id: '',
          })
          setActiveFormCount(activeFormCount + 1)
        }}
        isDisabled={activeFormCount > experiences.length - 1}
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          {becomeExpertValidation.values.teacherExperience0?.startDate
            ? 'Add more'
            : 'Add'}
        </p>
      </Button>
    </div>
  )
}

export default TeacherExperience
