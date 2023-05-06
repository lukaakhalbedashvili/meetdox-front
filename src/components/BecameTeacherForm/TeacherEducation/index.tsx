'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import { IoIosClose } from 'react-icons/io'
import Button from '@/elements/Button'
import TeacherEducationFormSection from './TeacherEducationFormSection'
import useTeacherEducation from './useTeacherEducation'
import { BecameTeacherSections } from '../becameTeacher.interface'

interface TeacherEducationProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
}

const TeacherEducation: FC<TeacherEducationProps> = ({
  isFormSubmitted,
  setErroredSections,
}) => {
  const { educationForms, setEducationForms } = useTeacherEducation()

  return (
    <div className="mx-4 border-t-[1px] border-border_gray pt-7">
      <h2 className="text-xl">Education details</h2>

      {educationForms.map((item) => {
        return (
          <div key={item} className="relative mt-8  border-border_gray pt-2">
            <div
              className="absolute -top-4 right-0 bg-white"
              onClick={() =>
                setEducationForms(
                  educationForms.filter(
                    (educationIndex) => educationIndex !== item
                  )
                )
              }
            >
              <IoIosClose className="h-7 w-7 cursor-pointer" />
            </div>

            <TeacherEducationFormSection
              isFormSubmitted={isFormSubmitted}
              setErroredSections={setErroredSections}
            />
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
