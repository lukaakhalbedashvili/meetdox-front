import { useRef } from 'react'
import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'
import { useZustandStore } from '@/zustand'

const useLandingTeachersContent = () => {
  const { data, isLoading } = useGetLandingTeachers()
  const loggedInUser = useZustandStore((state) => state.loggedInUser)
  const categoriesSwiperSectionRef = useRef<HTMLDivElement>(null)

  return {
    data,
    categoriesSwiperSectionRef,
    loggedInUser,
    isLoading,
  }
}

export default useLandingTeachersContent
