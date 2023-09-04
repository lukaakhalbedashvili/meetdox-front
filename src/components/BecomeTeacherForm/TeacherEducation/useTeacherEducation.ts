import { useEffect, useState } from 'react'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { useZustandStore } from '@/zustand'

const useTeacherEducation = () => {
  const [activeFormCount, setActiveFormCount] = useState<number>(0)

  const { loggedInUser } = useZustandStore()

  const { refetch } = useGetTeacherPublicData(loggedInUser?.uid)

  useEffect(() => {
    refetch().then((data) => {
      if (data.data?.teacherEducation) {
        setActiveFormCount(data?.data?.teacherEducation?.length)
      }
    })
  }, [refetch, loggedInUser?.uid])

  return { activeFormCount, setActiveFormCount }
}

export default useTeacherEducation
