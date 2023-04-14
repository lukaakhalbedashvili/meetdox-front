import { useQuery } from 'react-query'
import { myData } from '@/utils/api/user'

export const useMyDataQuery = (token: string) =>
  // ======= need modification =====
  useQuery('myData', () => myData(token), {
    enabled: !!token,
  })
