import { useQuery } from '@tanstack/react-query'
import { fetchTeacherUnavailableTimeSlots } from '@/utils/api/fetchTeacherUnavailableTimeSlots'
import { QueryKey } from '../../reactQuery.interface'

export const useGetTeacherUnavailableTimeSlots = (
  uid: string,
  offset: number
) => {
  return useQuery({
    queryKey: [QueryKey.GET_TEACHER_AVAILABLE_TIME_SLOTS, uid],
    queryFn: () => fetchTeacherUnavailableTimeSlots(uid, offset),
    refetchOnWindowFocus: false,
    enabled: false,
  })
}
