import axios from 'axios'
import { TeacherFilter } from '@/reactQuery/teacherQuaries/getTeachers/getTeachers.interface'
import { GetTeacherData } from '@/components/Catalog/catalog.interface'
import { API_URL } from '../consts/consts'

export const getTeachersList = async (
  token: string | undefined,
  filter: TeacherFilter
): Promise<GetTeacherData> => {
  const response = await axios.get(`${API_URL}/users/teacher/get-teachers`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: {
      category: filter.category,
      subCategories: filter.subCategories,
      skills: filter.skills,
      country: filter.country,
      limit: filter.limit,
      page: filter.page,
    },
  })
  if (response.data.status === 'error')
    return {
      teachers: [],
      totalItems: 1,
    }
  return { teachers: response.data.data, totalItems: response.data.totalItems }
}
