import axios, { AxiosResponse } from 'axios'
import { UserData } from '@/reactQuery/getUserData/getUserData.interface'
import { API_URL } from '../consts/consts'

export const fetchLoggedInUserData = async (
  token: string | undefined
): Promise<AxiosResponse<UserData>> => {
  const response = await axios.get(`${API_URL}/users/my-data`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response
}
