import { useQuery } from 'react-query'
import { fetchTeacherPublicDataApiReq } from '@/utils/api/fetchTeacherPublicDataApiReq'
import { QueryKey } from '../../reactQuery.interface'

export const useGetTeacherPublicData = (uid: string) => {
  return useQuery({
    queryKey: [QueryKey.GET_TEACHER_PUBLIC_DATA, uid],
    queryFn: () => fetchTeacherPublicDataApiReq(uid),
  })
}
