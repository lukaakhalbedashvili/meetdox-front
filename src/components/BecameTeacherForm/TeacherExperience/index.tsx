'use client'
import Button from '@/elements/Button'
import TeacherExperienceFormSection from './TeacherExperienceFormSection'
import useTeacherExperience from './useTeacherExperience'

const TeacherExperience = () => {
  const { experiences, setExperiences } = useTeacherExperience()
  return (
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Experience details</h2>

      {experiences.map((item) => {
        return <TeacherExperienceFormSection key={item} />
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
