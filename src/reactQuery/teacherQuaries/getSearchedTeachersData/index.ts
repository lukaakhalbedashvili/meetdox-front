import { useQuery } from '@tanstack/react-query'
import { searchTeacherApiReq } from '@/utils/api/searchTeacherApiReq'
import { QueryKey } from '../../reactQuery.interface'

export const useGetSearchedUserData = (keyword?: string) => {
  return useQuery({
    queryKey: [QueryKey.GET_TEACHER_PUBLIC_DATA, keyword],
    queryFn: () => searchTeacherApiReq(keyword),
    refetchOnWindowFocus: false,
  })
}
