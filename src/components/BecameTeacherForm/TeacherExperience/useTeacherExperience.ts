import { useState } from 'react'

const useTeacherExperience = () => {
  const [experiences, setExperiences] = useState<number[]>([])
  return { experiences, setExperiences }
}

export default useTeacherExperience
