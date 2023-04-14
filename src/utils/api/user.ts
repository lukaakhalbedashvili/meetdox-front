import axios from 'axios'
import { API_URL } from '../consts/consts'

export const myData = async (token: string) => {
  const response = await axios.get(`${API_URL}/users/my-data`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response
}
