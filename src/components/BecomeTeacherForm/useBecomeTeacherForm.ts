import { useEffect, useState } from 'react'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from './becomeTeacher.interface'

const useBecameTeacherForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [erroredSections, setErroredSections] =
    useState<BecomeTeacherSectionsErrors>({
      personalInfo: false,
      education: false,
      experience: false,
      skills: false,
      domain: false,
      contact: false,
      about: false,
    })

  const [values, setValues] = useState<FormValues>({
    personalInfo: {
      birthMonth: '',
      birthYear: '',
      lastName: '',
      name: '',
      image: null,
    },
    skills: [],
    teacherEducation: [],
    teacherDomain: { category: '', subCategories: [] },
    contact: { country: '', phone: '' },
    teacherExperience: [],
    about: { description: '' },
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { personalInfo, contact, about, domain } = erroredSections

    if (personalInfo || contact || about || domain) {
      console.error('error', values)
      setIsFormSubmitted(false)
    } else {
      console.error('nice', values)
      setIsFormSubmitted(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erroredSections, isFormSubmitted])

  return {
    setErroredSections,
    setValues,
    isFormSubmitted,
    setIsFormSubmitted,
    values,
  }
}

export default useBecameTeacherForm
