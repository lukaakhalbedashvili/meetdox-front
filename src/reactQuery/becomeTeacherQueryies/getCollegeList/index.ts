import { useQuery } from 'react-query'
import { QueryKey } from '@/reactQuery/reactQuery.interface'
import { fetchCollegeList } from '@/utils/api/fetchCollegeList'

export const useGetCollegeList = (searchParam: string | undefined) => {
  return useQuery({
    queryKey: QueryKey.GET_COLLEGE_LIST,
    queryFn: async () => {
      return searchParam && (await fetchCollegeList(searchParam))
    },
    enabled: false,
  })
}
