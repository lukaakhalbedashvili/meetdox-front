import axios from 'axios'
import { UseSendTeacherCreationQueriesProps } from '@/reactQuery/becomeTeacherQueryies/useSendTeacherCreationQueries'
import { API_URL } from '../consts/consts'
import { auth } from '../firebase/init'

export const fetchCollegeList = (value: string) => {
  return axios
    .get('http://universities.hipolabs.com/search', {
      params: { name: value },
    })
    .then((res) => {
      const dataToSet = res.data.map((item: { name: string }) => {
        return item.name
      })

      return [...new Set<string>(dataToSet)].slice(0, 5)
    })
}

export const createTeacher = async (
  payload: UseSendTeacherCreationQueriesProps
) => {
  const { data } = payload
  const token = await auth.currentUser?.getIdToken()
  return axios
    .post(`${API_URL}/users/teacher/create-new-teacher`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data
    })
}
