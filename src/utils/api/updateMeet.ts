import axios from 'axios'
import { ScheduleStepStatus } from '@/components/Dashboard/dashboard.interface'
import { API_URL } from '../consts/consts'
import { auth } from '../firebase/init'

export const updateMeet = async (data: {
  clientUid: string
  teacherUid: string
  meetId: string
  newStatus: ScheduleStepStatus | string
}) => {
  const token = await auth.currentUser?.getIdToken()

  const response = await axios.post(
    `${API_URL}/users/update-meet-status`,
    data,
    {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response
}
