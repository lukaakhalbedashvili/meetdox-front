'use client'
import React from 'react'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import useBecomeTeacherForm from './useBecomeTeacherForm'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherDomain from './TeacherDomain'
import TeacherSkills from './TeacherSkills'
import AboutTeacher from './AboutTeacher'
import TeacherContact from './TeacherContact'
import TeacherCompensation from './TeacherCompensation'

const BecomeTeacherForm = () => {
  const {
    becomeExpertValidation,
    expertDataFromBack,
    isLoading,
    isFormSubmitting,
    setIsFormSubmitting,
  } = useBecomeTeacherForm()

  return (
    <form className="min-h-screen">
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {(expertDataFromBack || !isLoading) && (
        <>
          <TeacherPersonalInfo
            becomeExpertValidation={becomeExpertValidation}
          />

          <div className="mt-2">
            <TeacherEducation becomeExpertValidation={becomeExpertValidation} />
          </div>

          <TeacherExperience becomeExpertValidation={becomeExpertValidation} />

          <TeacherDomain becomeExpertValidation={becomeExpertValidation} />

          {becomeExpertValidation.values.domain.category && (
            <TeacherSkills becomeExpertValidation={becomeExpertValidation} />
          )}

          <AboutTeacher becomeExpertValidation={becomeExpertValidation} />

          <TeacherContact becomeExpertValidation={becomeExpertValidation} />

          <TeacherCompensation
            becomeExpertValidation={becomeExpertValidation}
          />

          <div className="flex h-full items-center justify-end py-8">
            {Object.keys(becomeExpertValidation.errors).length > 0 &&
              becomeExpertValidation.submitCount > 0 && (
                <p className="mr-10 text-error">scroll up for errors</p>
              )}

            {Object.keys(becomeExpertValidation.errors).length === 0 &&
              isFormSubmitting && (
                <span className="mr-10">
                  <ClipLoader color="#36d7b7" />
                </span>
              )}

            <Button
              isDisabled={
                Object.keys(becomeExpertValidation.errors).length > 0 &&
                becomeExpertValidation.submitCount > 0
              }
              type="button"
              customTailwindClasses="bg-sky border-sky text-white mr-10"
              onClickHandler={(e) => {
                e.preventDefault()
                becomeExpertValidation.submitCount > 0 &&
                  setIsFormSubmitting(true)
                becomeExpertValidation.submitForm()
              }}
            >
              <p className="flex h-[36px] w-32 items-center justify-center text-sm">
                Save
              </p>
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export default BecomeTeacherForm
