import { useState } from 'react'

const useTeacherExperience = () => {
  const [experiences, setExperiences] = useState<number[]>([0])
  return { experiences, setExperiences }
}

export default useTeacherExperience
