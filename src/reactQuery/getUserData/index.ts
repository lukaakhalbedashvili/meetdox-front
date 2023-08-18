import { useQuery } from '@tanstack/react-query'
import { fetchLoggedInUserData } from '@/utils/api/loggedInUser'
import { auth } from '@/utils/firebase/init'
import { QueryKey } from '../reactQuery.interface'

export const useFetchLoggedInUserData = () =>
  useQuery({
    queryKey: [QueryKey.GET_LOGGED_IN_USER_DATA],
    enabled: false,
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      return fetchLoggedInUserData(token)
    },
    retry: 0,
    retryDelay: 1000,
  })
