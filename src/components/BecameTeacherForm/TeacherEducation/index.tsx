'use client'
import Button from '@/elements/Button'
import TeacherEducationFormSection from './TeacherEducationFormSection'
import useTeacherEducation from './useTeacherEducation'

const TeacherEducation = () => {
  const { educationForms, setEducationForms } = useTeacherEducation()

  return (
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Education details</h2>

      {educationForms.map((item) => {
        return <TeacherEducationFormSection key={item} />
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
