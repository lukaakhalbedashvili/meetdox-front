import { useState } from 'react'

const useTeacherEducation = () => {
  const [educationForms, setEducationForms] = useState<number[]>([])
  return { educationForms, setEducationForms }
}

export default useTeacherEducation
