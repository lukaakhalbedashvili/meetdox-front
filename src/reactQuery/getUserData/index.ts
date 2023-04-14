import { useQuery } from 'react-query'
import { fetchLoggedInUserData } from '@/utils/api/loggedInUser'
import { auth } from '@/utils/firebase/init'
import { QueryKey } from '../reactQuery.interface'

export const useFetchLoggedInUserData = () =>
  useQuery({
    queryKey: QueryKey.GET_LOGGED_IN_USER_DATA,
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      return fetchLoggedInUserData(token)
    },
    enabled: false,
  })
