'use client'
import React, { FC } from 'react'
import { FormikProps } from 'formik'
import SkillItem from '@/elements/SkillItem'
import TypeAheadInput from '@/elements/TypeAheadInput'
import { TeacherSkillsInputNames } from './teacherSkills.interface'
import useTeacherSkills from './useTeacherSkills'
import { BecomeExpertForm } from '../becomeTeacher.interface'

interface TeacherSkillsProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherSkills: FC<TeacherSkillsProps> = ({ becomeExpertValidation }) => {
  const {
    skills,
    onSelectHandler,
    skillInInput,
    setSkillInInput,
    handleChange,
  } = useTeacherSkills(becomeExpertValidation)

  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Skills</h2>

      <div className="flex flex-wrap">
        {becomeExpertValidation.values.skills?.map((item) => {
          return (
            <div key={item} className="mr-2 mt-2">
              <SkillItem
                onClose={(skill) =>
                  becomeExpertValidation.setFieldValue(
                    TeacherSkillsInputNames.SKILLS,
                    becomeExpertValidation.values.skills?.filter(
                      (item) => item !== skill
                    )
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
          onBlurHandler={becomeExpertValidation.handleBlur}
          onChange={(e) => {
            setSkillInInput(e.target.value)
            handleChange(e)
          }}
          value={skillInInput}
          onSelect={onSelectHandler}
        />
      </div>
    </div>
  )
}

export default TeacherSkills
