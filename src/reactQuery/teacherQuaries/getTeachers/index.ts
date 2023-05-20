import { useQuery } from 'react-query'
import { auth } from '@/utils/firebase/init'
import { getTeachersList } from '@/utils/api/getTeachersList'
import { TeacherFilter } from './getTeachers.interface'
import { QueryKey } from '../../reactQuery.interface'

export const useGetTeachers = (filter: TeacherFilter) =>
  useQuery({
    queryKey: [QueryKey.GET_TEACHERS_LIST, filter],
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      const response = await getTeachersList(token, filter)
      return response
    },
  })
