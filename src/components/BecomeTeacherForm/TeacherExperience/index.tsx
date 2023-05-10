'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import { IoIosClose } from 'react-icons/io'
import Button from '@/elements/Button'
import TeacherExperienceFormSection from './TeacherExperienceFormSection'
import useTeacherExperience from './useTeacherExperience'
import { BecomeTeacherSections, FormValues } from '../becomeTeacher.interface'

interface TeacherExperienceProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSections>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
}

const TeacherExperience: FC<TeacherExperienceProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
}) => {
  const { experiences, setExperiences } = useTeacherExperience()

  return (
    <div className="mx-4 mt-5 border-t-[1px] border-border_gray pt-5  sm:mx-12">
      <h2 className="text-xl">Experience details</h2>

      {experiences.map((item) => {
        return (
          <div
            key={item}
            className="relative mt-8  border-border_gray pt-2 sm:w-1/2"
          >
            <div
              className="absolute -top-4 right-0 bg-white"
              onClick={() =>
                setExperiences(
                  experiences.filter(
                    (educationIndex) => educationIndex !== item
                  )
                )
              }
            >
              <IoIosClose className="h-7 w-7 cursor-pointer" />
            </div>

            <TeacherExperienceFormSection
              formId={item}
              setFormValues={setFormValues}
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
          setExperiences((state) => [...state, state.length + 1])
        }
      >
        <p className="flex h-[36px] w-32 items-center justify-center text-sm">
          {experiences.length === 0 ? 'Add' : 'Add more'}
        </p>
      </Button>
    </div>
  )
}

export default TeacherExperience
