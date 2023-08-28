import axios from 'axios'
import { API_URL } from '../consts/consts'

export interface UnavailableTimeSlots {
  date: string
  time: number
}

export const fetchTeacherUnavailableTimeSlots = async (
  uid: string,
  offset: number
): Promise<UnavailableTimeSlots[]> => {
  const response = await axios.get(
    `${API_URL}/users/teacher/get-teacher-available-times`,
    {
      params: { uid, offset },
    }
  )

  return response.data.data
}
