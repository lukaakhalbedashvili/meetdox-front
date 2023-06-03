import { useEffect, useState } from 'react'
import { TeacherEducation as TeacherEduType } from '@/components/Catalog/catalog.interface'

interface UseTeacherEducation {
  defaultValues?: TeacherEduType[]
}

const useTeacherEducation = ({ defaultValues }: UseTeacherEducation) => {
  const [educationForms, setEducationForms] = useState<number[]>([0])

  useEffect(() => {
    defaultValues &&
      defaultValues.length > 0 &&
      setEducationForms(defaultValues.map((_, i) => i))
  }, [defaultValues])

  return { educationForms, setEducationForms }
}

export default useTeacherEducation
