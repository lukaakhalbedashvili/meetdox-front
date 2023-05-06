'use client'
import React, { Dispatch, FC, SetStateAction } from 'react'
import SkillItem from '@/elements/SkillItem'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { TeacherSkillsInputNames } from './teacherSkills.interface'
import useTeacherSkills from './useTeacherSkills'
import { BecameTeacherSections } from '../becameTeacher.interface'

interface TeacherSkillsProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
}

const TeacherSkills: FC<TeacherSkillsProps> = ({
  isFormSubmitted,
  setErroredSections,
}) => {
  const {
    teacherSkillsValidation,
    handleChange,
    skills,
    selectedSkills,
    setSelectedSkills,
    onSelectHandler,
  } = useTeacherSkills(isFormSubmitted, setErroredSections)

  return (
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Skills</h2>

      <div className="flex flex-wrap">
        {selectedSkills.map((item) => {
          return (
            <div key={item} className="mt-2 mr-2">
              <SkillItem
                onClose={(skill) =>
                  setSelectedSkills((state) =>
                    state.filter((item) => item !== skill)
                  )
                }
                text={item}
              />
            </div>
          )
        })}
      </div>

      <div className="mt-2 h-10">
        <TypeAheadInput
          placeHolder={TeacherSkillsInputNames.SKILLS}
          results={skills}
          name={TeacherSkillsInputNames.SKILLS}
          onBlurHandler={teacherSkillsValidation.handleBlur}
          errorMessage={
            teacherSkillsValidation.touched.skill &&
            teacherSkillsValidation.errors.skill
          }
          onChange={handleChange}
          value={teacherSkillsValidation.values.skill}
          onSelect={onSelectHandler}
        />
      </div>
    </div>
  )
}

export default TeacherSkills
