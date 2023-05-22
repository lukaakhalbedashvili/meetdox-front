import { useGetLandingTeachers } from '@/reactQuery/teacherQuaries/getLandingTeachers'

const useLandingTeachersContent = () => {
  const categoryList = [
    'Doctor',
    'Lawyer',
    'Accountant',
    'Real Estate Agent',
    'Financial Advisor',
    'Insurance Agent',
    'Photographer',
    'Designer',
    'Developer',
  ]

  const { data } = useGetLandingTeachers(categoryList)

  return {
    data,
    categoryList,
  }
}

export default useLandingTeachersContent
