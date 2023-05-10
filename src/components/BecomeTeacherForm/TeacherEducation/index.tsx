'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import { IoIosClose } from 'react-icons/io'
import Button from '@/elements/Button'
import TeacherEducationFormSection from './TeacherEducationFormSection'
import useTeacherEducation from './useTeacherEducation'
import { BecomeTeacherSections, FormValues } from '../becomeTeacher.interface'

interface TeacherEducationProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSections>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
}

const TeacherEducation: FC<TeacherEducationProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
}) => {
  const { educationForms, setEducationForms } = useTeacherEducation()

  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Education details</h2>

      {educationForms.map((item) => {
        return (
          <div key={item} className=" border-border_gray pt-2">
            <div className="relative mt-6 sm:w-1/2">
              <div
                className="absolute -top-6 right-0 bg-white"
                onClick={() => {
                  setEducationForms(
                    educationForms.filter(
                      (educationIndex) => educationIndex !== item
                    )
                  )
                  setFormValues((state) => {
                    return { ...state }
                  })
                }}
              >
                <IoIosClose className="h-7 w-7 cursor-pointer" />
              </div>

              <TeacherEducationFormSection
                formId={item}
                setFormValues={setFormValues}
                isFormSubmitted={isFormSubmitted}
                setErroredSections={setErroredSections}
              />
            </div>
          </div>
        )
      })}

      <Button
        type="button"
        customTailwindClasses="bg-sky border-sky text-white mt-3"
        onClickHandler={() =>
          setEducationForms((state) =>
            state.length > 0 ? [...state, state.length + 1] : [1]
          )
        }
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          {educationForms.length === 0 ? 'Add' : 'Add more'}
        </p>
      </Button>
    </div>
  )
}

export default TeacherEducation
