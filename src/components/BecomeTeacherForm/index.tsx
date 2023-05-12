'use client'
import React, { useEffect, useState } from 'react'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherSkills from './TeacherSkills'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from './becomeTeacher.interface'
import TeacherDomain from './TeacherDomain'
import TeacherContact from './TeacherContact'
import AboutU from './AboutTeacher'

const BecomeTeacherForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [erroredSections, setErroredSections] =
    useState<BecomeTeacherSectionsErrors>({
      personalInfo: false,
      education: false,
      experience: false,
      skills: false,
      domain: false,
      contact: false,
      about: false,
    })

  const [values, setValues] = useState<FormValues>({
    personalInfo: {
      birthMonth: '',
      birthYear: '',
      lastName: '',
      name: '',
      middleName: '',
      image: null,
    },
    skills: [],
    teacherEducation: [],
    teacherDomain: { category: '', subCategories: [] },
    contact: { country: '', phone: '' },
    teacherExperience: [],
    about: { description: '' },
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { personalInfo, contact, about, domain } = erroredSections

    if (personalInfo || contact || about || domain) {
      console.error('error', values)
      setIsFormSubmitted(false)
    } else {
      console.error('nice', values)
      setIsFormSubmitted(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <AboutU
        setFormValues={setValues}
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

export default BecomeTeacherForm
