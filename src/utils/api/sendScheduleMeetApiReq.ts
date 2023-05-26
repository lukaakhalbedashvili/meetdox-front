import axios from 'axios'
import { API_URL } from '../consts/consts'
import { auth } from '../firebase/init'

export const sendScheduleMeetApiReq = async (data: {
  duration: number
  date: string
  time: number
  timeZone: number
  teacherUid: string
}) => {
  const token = await auth.currentUser?.getIdToken()

  const response = await axios.post(`${API_URL}/users/schedule-meet`, data, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response
}
