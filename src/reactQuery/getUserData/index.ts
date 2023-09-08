import { useQuery } from '@tanstack/react-query'
import { fetchLoggedInUserData } from '@/utils/api/loggedInUser'
import { auth } from '@/utils/firebase/init'
import { QueryKey } from '../reactQuery.interface'

export const useFetchLoggedInUserData = () =>
  useQuery({
    queryKey: [QueryKey.GET_LOGGED_IN_USER_DATA],
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      return fetchLoggedInUserData(token)
    },
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  })
