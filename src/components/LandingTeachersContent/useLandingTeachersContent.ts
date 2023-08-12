import { useRef } from 'react'
import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'

const useLandingTeachersContent = () => {
  const { data, isLoading } = useGetLandingTeachers()
  const itemsRef = useRef<HTMLDivElement>(null)

  return {
    data,
    isLoading,
    itemsRef,
  }
}

export default useLandingTeachersContent
