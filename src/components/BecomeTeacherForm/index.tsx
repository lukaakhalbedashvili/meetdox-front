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
import TeacherCompensation from './TeacherCompensation'

const BecomeTeacherForm = () => {
  const {
    setErroredSections,
    setValues,
    isFormSubmitted,
    setIsFormSubmitted,
    values,
    teacherData,
  } = useBecameTeacherForm()

  return (
    <form>
      <TeacherPersonalInfo
        defaultValues={{
          data: teacherData?.personalDetails,
          image: teacherData?.image,
        }}
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <div className="mt-2">
        <TeacherEducation
          defaultValues={teacherData?.teacherEducation}
          setFormValues={setValues}
          isFormSubmitted={isFormSubmitted}
          setErroredSections={setErroredSections}
        />
      </div>

      <TeacherExperience
        defaultValues={teacherData?.teacherExperience}
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherDomain
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
        defaultValue={teacherData?.domain}
      />

      {(values.domain.category || teacherData?.domain.category) && (
        <TeacherSkills
          defaultValues={teacherData?.skills}
          selectedDomain={
            teacherData?.domain.category || values.domain.category
          }
          setFormValues={setValues}
          isFormSubmitted={isFormSubmitted}
          setErroredSections={setErroredSections}
        />
      )}

      <AboutU
        defaultValue={teacherData?.description}
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherContact
        defaultValues={teacherData?.contactDetails}
        setFormValues={setValues}
        isFormSubmitted={isFormSubmitted}
        setErroredSections={setErroredSections}
      />

      <TeacherCompensation
        defaultValues={teacherData?.perHour.toString()}
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
