'use client'
import React from 'react'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import TeacherPersonalInfo from './TeacherPersonalInfo'
import useTempo from './useTempo'
import TeacherEducation from './TeacherEducation'
import TeacherExperience from './TeacherExperience'
import TeacherDomain from './TeacherDomain'
import TeacherSkills from './TeacherSkills'
import AboutTeacher from './AboutTeacher'

const BecomeTeacherForm = () => {
  const { becomeExpertValidation, expertDataFromBack } = useTempo()

  return (
    <form className="min-h-screen">
      {!expertDataFromBack && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {expertDataFromBack && (
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

          {/* 





          <TeacherContact
            defaultValues={teacherData?.contactDetails}
            setFormValues={setValues}
            isFormSubmitted={isFormSubmitted}
            setErroredSections={setErroredSections}
          />

          <TeacherCompensation
            defaultValues={teacherData?.perHour}
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
          </div> */}
          <Button
            type="button"
            customTailwindClasses="bg-sky border-sky text-white"
            onClickHandler={(e) => {
              e.preventDefault()
              becomeExpertValidation.submitForm()
            }}
          >
            <p className="flex h-[36px] w-32 items-center justify-center text-sm">
              Save
            </p>
          </Button>
        </>
      )}
    </form>
  )
}

export default BecomeTeacherForm
