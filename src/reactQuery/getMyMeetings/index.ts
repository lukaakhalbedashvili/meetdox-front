import { useQuery } from '@tanstack/react-query'
import { auth } from '@/utils/firebase/init'
import { fetchMyMeetings } from '@/utils/api/getMyMeetings'
import { QueryKey } from '../reactQuery.interface'

export const useFetchMyMeetings = (type: string) =>
  useQuery({
    queryKey: [QueryKey.GET_MY_MEETINGS],
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      return fetchMyMeetings(token, type)
    },
  })
