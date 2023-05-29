import { useQuery } from '@tanstack/react-query'
import { getTeachersListForLanding } from '@/utils/api/getTeachersListForLanding'
import { QueryKey } from '../../reactQuery.interface'

export const useGetLandingTeachers = () =>
  useQuery({
    queryKey: [QueryKey.GET_LANDING_TEACHER_LIST],
    queryFn: async () => {
      const response = await getTeachersListForLanding()
      return response
    },
  })
