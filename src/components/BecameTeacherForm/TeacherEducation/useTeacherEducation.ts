import { useState } from 'react'

const useTeacherEducation = () => {
  const [educationForms, setEducationForms] = useState([1])
  return { educationForms, setEducationForms }
}

export default useTeacherEducation
