import { useQuery } from '@tanstack/react-query'
import { fetchCollegeList } from '@/utils/api/becameTeacherApis'
import { QueryKey } from '@/reactQuery/reactQuery.interface'

export const useGetCollegeList = (searchParam: string | undefined) => {
  return useQuery({
    queryKey: [QueryKey.GET_COLLEGE_LIST],
    queryFn: async () => {
      return searchParam && (await fetchCollegeList(searchParam))
    },
    enabled: false,
  })
}
