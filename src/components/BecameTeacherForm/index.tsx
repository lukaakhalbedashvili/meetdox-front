'use client'
import React, { useEffect, useState } from 'react'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherSkills from './TeacherSkills'
import { BecameTeacherSections, FormValues } from './becameTeacher.interface'
import TeacherDomain from './TeacherDomain'
import TeacherContact from './TeacherContact'

const BecameTeacherForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [erroredSections, setErroredSections] = useState<BecameTeacherSections>(
    {
      personalInfo: false,
      education: false,
      experience: false,
      skills: false,
      domain: false,
      contact: false,
    }
  )
  const [values, setValues] = useState<FormValues>({
    personalInfo: {
      birthMonth: '',
      birthYear: '',
      lastName: '',
      name: '',
      middleName: '',
    },
    skills: [],
    teacherEducation: [],
    teacherDomain: { category: '', subCategory: '' },
    contact: { country: '', phone: '' },
    teacherExperience: [],
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { education, experience, personalInfo, skills } = erroredSections

    if (education || experience || personalInfo || skills) {
      setIsFormSubmitted(false)
      console.error('error')
    } else {
      console.error('success', values)
      setIsFormSubmitted(false)
    }
  }, [erroredSections, isFormSubmitted])

  return (
    <form>
      <TeacherPersonalInfo
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <div className="mt-2">
        <TeacherEducation
          setFormValues={setValues}
          isFormSubmitted={isFormSubmitted}
          setErroredSections={setErroredSections}
        />
      </div>

      <TeacherExperience
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherSkills
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherDomain
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherContact
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <div className="my-4 flex justify-end pr-4 sm:px-12">
        <Button
          type="button"
          customTailwindClasses="bg-sky border-sky text-white"
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
