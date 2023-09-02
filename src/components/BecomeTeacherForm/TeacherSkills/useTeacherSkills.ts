import { FormikProps } from 'formik'
import { ChangeEvent, useCallback, useState } from 'react'
import { search } from '@/utils/services/search'
import { categories } from '@/data/categoryItems'
import { TeacherSkillsInputNames } from './teacherSkills.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'

const useTeacherSkills = (
  becomeExpertValidation: FormikProps<BecomeExpertForm>
) => {
  const [skills, setSkills] = useState<string[]>([])

  const [skillInInput, setSkillInInput] = useState<string>('')

  const handleSearch = useCallback(
    (searchParam: string) => {
      setSkills(
        search(
          searchParam,
          categories.find(
            (item) =>
              item.name === becomeExpertValidation.values.domain.category
          )?.skills || []
        )
      )
    },
    [becomeExpertValidation.values.domain.category]
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value)
  }

  const onSelectHandler = (skill: string) => {
    if (becomeExpertValidation.values.skills?.includes(skill)) return

    becomeExpertValidation.setFieldValue(
      TeacherSkillsInputNames.SKILLS,
      becomeExpertValidation.values.skills
        ? [...becomeExpertValidation.values.skills, skill]
        : [skill]
    )

    setSkillInInput('')
  }

  return {
    handleChange,
    skills,
    onSelectHandler,
    skillInInput,
    setSkillInInput,
  }
}

export default useTeacherSkills
