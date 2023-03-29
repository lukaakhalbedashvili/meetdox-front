import axios from 'axios'
import { API_URL } from '../consts/consts'

export const registrationApiRequest = async (
  email: string,
  password: string,
  username: string
) => {
  const response = await axios.post(
    `${API_URL}/users/authentication/registration`,
    {
      email,
      username,
      password,
    }
  )
  console.log(response)
  return response
}
