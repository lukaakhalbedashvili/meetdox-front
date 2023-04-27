'use client'
import React from 'react'
import SkillItem from '@/elements/SkillItem'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { TeacherSkillsInputNames } from './teacherSkills.interface'
import useTeacherSkills from './useTeacherSkills'

const TeacherSkills = () => {
  const {
    teacherSkillsValidation,
    handleChange,
    skills,
    selectedSkills,
    setSelectedSkills,
    onSelectHandler,
  } = useTeacherSkills()

  return (
    <div className="mx-4">
      <h2 className="mt-7 text-xl">Skills</h2>

      <div className="flex items-center">
        {selectedSkills.map((item) => {
          return (
            <SkillItem
              onClose={(skill) =>
                setSelectedSkills((state) =>
                  state.filter((item) => item !== skill)
                )
              }
              text={item}
              key={item}
            />
          )
        })}
      </div>

      <div className="mt-2 h-10 w-96">
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
