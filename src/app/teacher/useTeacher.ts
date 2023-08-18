import { useState } from 'react'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { useZustandStore } from '@/zustand'
import { TeacherSections } from './teacher.interface'

interface UseTeacherProps {
  teacherUid: string
}

const useTeacher = ({ teacherUid }: UseTeacherProps) => {
  const { data, isLoading } = useGetTeacherPublicData(teacherUid)

  const { setIsLogInPopupOpen, loggedInUser } = useZustandStore()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<TeacherSections>(
    TeacherSections.EXPERIENCE
  )

  return {
    activeSection,
    setActiveSection,
    isModalOpen,
    setIsModalOpen,
    data,
    isLoading,
    setIsLogInPopupOpen,
    loggedInUser,
  }
}

export default useTeacher
