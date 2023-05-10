import { useFormik } from 'formik'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import * as Yup from 'yup'
import { skillsData } from '@/data/skills'
import { search } from '@/utils/services/search'
import {
  TeacherSkillsForm,
  TeacherSkillsInputNames,
} from './teacherSkills.interface'
import { BecameTeacherSections, FormValues } from '../becameTeacher.interface'

const useTeacherSkills = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>
) => {
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

    onSubmit: async () => {
      setErroredSections((prevState) => ({
        ...prevState,
        skills: selectedSkills.length === 0,
      }))

      setFormValues((state) => {
        return { ...state, skills: selectedSkills }
      })
    },
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

  useEffect(() => {
    isFormSubmitted && teacherSkillsValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

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
