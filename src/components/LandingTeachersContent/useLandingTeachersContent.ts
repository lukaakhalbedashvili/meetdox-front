import { useRef } from 'react'
import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'

const useLandingTeachersContent = () => {
  const { data, isLoading } = useGetLandingTeachers()
  const categoriesSwiperSectionRef = useRef<HTMLDivElement>(null)

  return {
    data,
    isLoading,
    categoriesSwiperSectionRef,
  }
}

export default useLandingTeachersContent
