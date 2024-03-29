import axios from 'axios'
import { GetTeacherDataForLanding } from '@/components/Catalog/catalog.interface'
import { API_URL } from '../consts/consts'

export const getTeachersListForLanding =
  async (): Promise<GetTeacherDataForLanding> => {
    const response = await axios.get(
      `${API_URL}/users/teacher/get-landing-teachers`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
          Authorization: `Bearer`,
        },
      }
    )
    if (response.data.status === 'error') return { categorizedTeachers: [] }
    return response.data.data
  }
