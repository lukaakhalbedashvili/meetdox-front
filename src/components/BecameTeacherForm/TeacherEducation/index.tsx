'use client'
import { Dispatch, FC, SetStateAction } from 'react'
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
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Education details</h2>

      {educationForms.map((item) => {
        return (
          <TeacherEducationFormSection
            key={item}
            isFormSubmitted={isFormSubmitted}
            setErroredSections={setErroredSections}
          />
        )
      })}

      <Button
        type="submit"
        customTailwindClasses="bg-sky border-sky text-white"
        onClickHandler={() =>
          setEducationForms((state) => [...state, state.length + 1])
        }
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          Add another
        </p>
      </Button>
    </div>
  )
}

export default TeacherEducation
