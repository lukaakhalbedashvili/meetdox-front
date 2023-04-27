import { useState } from 'react'

const useTeacherExperience = () => {
  const [experiences, setExperiences] = useState([1])
  return { experiences, setExperiences }
}

export default useTeacherExperience
