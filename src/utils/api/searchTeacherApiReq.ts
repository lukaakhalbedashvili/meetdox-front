import axios from 'axios'
import { TeacherData } from '@/components/Catalog/catalog.interface'
import { API_URL } from '../consts/consts'

export const searchTeacherApiReq = async (
  keyword?: string
): Promise<TeacherData[] | []> => {
  if (!keyword) return []
  const response = await axios.get(`${API_URL}/users/teacher/search-teacher`, {
    params: { keyword },
  })

  return response.data.data
}
