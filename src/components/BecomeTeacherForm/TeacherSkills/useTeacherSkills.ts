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
import { search } from '@/utils/services/search'
import { categories } from '@/data/categoryItems'
import {
  TeacherSkillsForm,
  TeacherSkillsInputNames,
} from './teacherSkills.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherSkills = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  selectedDomain: string,
  defaultValues?: string[]
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
        skills: false,
      }))

      setFormValues((state) => {
        return { ...state, skills: selectedSkills }
      })
    },
  })

  const handleSearch = useCallback(
    (searchParam: string) => {
      setSkills(
        search(
          searchParam,
          categories.find((item) => item.name === selectedDomain)?.skills || []
        )
      )
    },
    [selectedDomain]
  )

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

  useEffect(() => {
    const defaultSkills = Object.keys(defaultValues as object)
    defaultSkills &&
      defaultSkills?.length > 0 &&
      setSelectedSkills(defaultSkills)
  }, [defaultValues])

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
