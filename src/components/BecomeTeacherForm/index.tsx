'use client'
import React from 'react'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherSkills from './TeacherSkills'
import TeacherDomain from './TeacherDomain'
import TeacherContact from './TeacherContact'
import AboutU from './AboutTeacher'
import useBecameTeacherForm from './useBecomeTeacherForm'

const BecomeTeacherForm = () => {
  const {
    setErroredSections,
    setValues,
    isFormSubmitted,
    setIsFormSubmitted,
    values,
  } = useBecameTeacherForm()

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

      <TeacherDomain
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      {values.teacherDomain.category && (
        <TeacherSkills
          selectedDomain={values.teacherDomain.category}
          setFormValues={setValues}
          isFormSubmitted={isFormSubmitted}
          setErroredSections={setErroredSections}
        />
      )}

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
