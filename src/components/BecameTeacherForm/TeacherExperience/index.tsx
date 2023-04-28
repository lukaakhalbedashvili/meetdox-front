'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import Button from '@/elements/Button'
import TeacherExperienceFormSection from './TeacherExperienceFormSection'
import useTeacherExperience from './useTeacherExperience'
import { BecameTeacherSections } from '../becameTeacher.interface'

interface TeacherExperienceProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
}

const TeacherExperience: FC<TeacherExperienceProps> = ({
  isFormSubmitted,
  setErroredSections,
}) => {
  const { experiences, setExperiences } = useTeacherExperience()
  return (
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Experience details</h2>

      {experiences.map((item) => {
        return (
          <TeacherExperienceFormSection
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
          setExperiences((state) => [...state, state.length + 1])
        }
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          Add another
        </p>
      </Button>
    </div>
  )
}

export default TeacherExperience
