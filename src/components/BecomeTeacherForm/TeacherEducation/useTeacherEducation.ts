import { useState } from 'react'

const useTeacherEducation = () => {
  const [educationForms, setEducationForms] = useState<number[]>([0])
  return { educationForms, setEducationForms }
}

export default useTeacherEducation
