'use client'
import React, { useEffect, useState } from 'react'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherSkills from './TeacherSkills'
import { BecameTeacherSections } from './becameTeacher.interface'

const BecameTeacherForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [erroredSections, setErroredSections] = useState<BecameTeacherSections>(
    {
      personalInfo: false,
      education: false,
      experience: false,
      skills: false,
    }
  )

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { education, experience, personalInfo, skills } = erroredSections

    if (education || experience || personalInfo || skills) {
      setIsFormSubmitted(false)
      console.error('error')
    } else {
      console.error('success')
    }
  }, [erroredSections, isFormSubmitted])

  return (
    <form>
      <TeacherPersonalInfo
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <div className="mt-2">
        <TeacherEducation
          isFormSubmitted={isFormSubmitted}
          setErroredSections={setErroredSections}
        />
      </div>

      <TeacherExperience
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherSkills
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <div className="my-4 flex justify-end pr-4">
        <Button
          type="button"
          customTailwindClasses="bg-sky border-sky text-white mt-3"
          onClickHandler={(e) => {
            e.preventDefault()
            setIsFormSubmitted(true)
          }}
        >
          <p className="flex h-[36px] w-32 items-center justify-center text-sm">
            Save
          </p>
        </Button>
      </div>
    </form>
  )
}

export default BecameTeacherForm
