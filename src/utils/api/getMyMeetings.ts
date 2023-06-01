import axios from 'axios'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import { API_URL } from '../consts/consts'

export const fetchMyMeetings = async (
  token: string | undefined,
  type: string
): Promise<ScheduledMeetStructure[] | []> => {
  const response = await axios.get(`${API_URL}/users/my-meetings`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: {
      type: type,
    },
  })
  if (response.data.status === 'error') return []
  return response.data.data
}
