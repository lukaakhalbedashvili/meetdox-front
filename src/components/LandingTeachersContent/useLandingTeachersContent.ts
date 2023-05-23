import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'

const useLandingTeachersContent = () => {
  const { data } = useGetLandingTeachers()

  return {
    data,
  }
}

export default useLandingTeachersContent
