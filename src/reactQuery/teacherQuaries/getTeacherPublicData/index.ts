import { useQuery } from '@tanstack/react-query'
import { fetchTeacherPublicDataApiReq } from '@/utils/api/fetchTeacherPublicDataApiReq'
import { QueryKey } from '../../reactQuery.interface'

export const useGetTeacherPublicData = (uid?: string) => {
  return useQuery({
    queryKey: [QueryKey.GET_TEACHER_PUBLIC_DATA, uid],
    queryFn: () => fetchTeacherPublicDataApiReq(uid),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  })
}
