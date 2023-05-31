import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'

const useLandingTeachersContent = () => {
  const { data, isLoading } = useGetLandingTeachers()

  return {
    data,
    isLoading,
  }
}

export default useLandingTeachersContent
