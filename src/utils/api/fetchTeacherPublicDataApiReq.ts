import axios from 'axios'
import { TeacherData } from '@/components/Catalog/catalog.interface'
import { API_URL } from '../consts/consts'

export const fetchTeacherPublicDataApiReq = async (
  uid: string
): Promise<TeacherData> => {
  const response = await axios.get(`${API_URL}/users/teacher/get-teacher`, {
    params: { uid },
  })

  return response.data.data
}
