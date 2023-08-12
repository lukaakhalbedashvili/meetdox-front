import { useEffect, useState } from 'react'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { useZustandStore } from '@/zustand'
import { useFetchLoggedInUserData } from '@/reactQuery/teacherQuaries/getLoggedInUserData'
import { TeacherSections } from './teacher.interface'

interface UseTeacherProps {
  teacherUid: string
}

const useTeacher = ({ teacherUid }: UseTeacherProps) => {
  const { data, isLoading, refetch } = useGetTeacherPublicData(teacherUid)
  const userData = useFetchLoggedInUserData()
  const loggedInUserUid = userData.data?.data.data.uid
  const { setIsLogInPopupOpen } = useZustandStore()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<TeacherSections>(
    TeacherSections.EXPERIENCE
  )

  useEffect(() => {
    refetch()
  }, [])

  return {
    activeSection,
    setActiveSection,
    isModalOpen,
    setIsModalOpen,
    data,
    isLoading,
    loggedInUserUid,
    setIsLogInPopupOpen,
  }
}

export default useTeacher
