import { useQuery } from '@tanstack/react-query'
import { fetchLoggedInUserData } from '@/utils/api/loggedInUser'
import { auth } from '@/utils/firebase/init'
import { QueryKey } from '../../reactQuery.interface'

export const useFetchLoggedInUserData = () =>
  useQuery({
    queryKey: [QueryKey.GET_TEACHERS_LIST],
    queryFn: async () => {
      const token = await auth.currentUser?.getIdToken()
      return fetchLoggedInUserData(token)
    },
    refetchOnWindowFocus: false,
  })
