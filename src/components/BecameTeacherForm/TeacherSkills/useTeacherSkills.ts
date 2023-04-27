import { useFormik } from 'formik'
import { ChangeEvent, useCallback, useState } from 'react'
import * as Yup from 'yup'
import { skillsData } from '@/data/skills'
import { search } from '@/utils/services/search'
import {
  TeacherSkillsForm,
  TeacherSkillsInputNames,
} from './teacherSkills.interface'

const useTeacherSkills = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const validationSchema: Yup.ObjectSchema<TeacherSkillsForm> = Yup.object({
    skill: Yup.string(),
  })

  const teacherSkillsValidation = useFormik<TeacherSkillsForm>({
    initialValues: {
      skill: '',
    },

    validationSchema,

    onSubmit: async () => {},
  })

  const handleSearch = useCallback((searchParam: string) => {
    setSkills(search(searchParam, skillsData))
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    teacherSkillsValidation.setFieldValue(
      TeacherSkillsInputNames.SKILLS,
      e.target.value
    )

    handleSearch(e.target.value)
  }

  const onSelectHandler = (skill: string) => {
    if (selectedSkills.includes(skill)) return

    setSelectedSkills([...selectedSkills, skill])
    teacherSkillsValidation.setFieldValue(TeacherSkillsInputNames.SKILLS, '')
  }

  return {
    teacherSkillsValidation,
    handleChange,
    skills,
    selectedSkills,
    setSelectedSkills,
    onSelectHandler,
  }
}

export default useTeacherSkills
