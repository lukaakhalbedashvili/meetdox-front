'use client'
import React, { Dispatch, FC, SetStateAction } from 'react'
import SkillItem from '@/elements/SkillItem'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { TeacherSkillsInputNames } from './teacherSkills.interface'
import useTeacherSkills from './useTeacherSkills'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface TeacherSkillsProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
  selectedDomain: string
  defaultValues?: string[]
}

const TeacherSkills: FC<TeacherSkillsProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
  selectedDomain,
  defaultValues,
}) => {
  const {
    teacherSkillsValidation,
    handleChange,
    skills,
    selectedSkills,
    setSelectedSkills,
    onSelectHandler,
  } = useTeacherSkills(
    isFormSubmitted,
    setErroredSections,
    setFormValues,
    selectedDomain,
    defaultValues
  )

  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Skills</h2>

      <div className="flex flex-wrap">
        {selectedSkills.map((item) => {
          return (
            <div key={item} className="mr-2 mt-2">
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

      <div className="mt-2 h-10 sm:w-1/2">
        <TypeAheadInput
          placeHolder={TeacherSkillsInputNames.SKILLS}
          results={skills}
          name={TeacherSkillsInputNames.SKILLS}
          onBlurHandler={teacherSkillsValidation.handleBlur}
          onChange={handleChange}
          value={teacherSkillsValidation.values.skill}
          onSelect={onSelectHandler}
        />
      </div>
    </div>
  )
}

export default TeacherSkills
