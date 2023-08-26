import { useEffect, useRef, useState } from 'react'
import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'

const useLandingTeachersContent = () => {
  const loggedInUser = useFetchLoggedInUserData()
  const { data, isLoading } = useGetLandingTeachers()
  const categoriesSwiperSectionRef = useRef<HTMLDivElement>(null)

  const [isLoggedInUserLoading, setIsLoggedInUserLoading] = useState(true)

  useEffect(() => {
    loggedInUser.refetch().then(() => {
      setIsLoggedInUserLoading(false)
    })
  }, [])
  return {
    data,
    categoriesSwiperSectionRef,
    loggedInUser,
    isLoading,
    isLoggedInUserLoading,
  }
}

export default useLandingTeachersContent
