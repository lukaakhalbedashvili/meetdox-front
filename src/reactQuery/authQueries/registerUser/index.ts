import { useMutation } from 'react-query'
import { registrationApiRequest } from '@/utils/api/authentication'
import { Payload } from './registerUser.interface'

const registerUser = async (payload: Payload) => {
  const { code, email, username } = payload
  const data = await registrationApiRequest(email, username, code)
  return data
}

export const useRegisterUserQuery = () => {
  const mutation = useMutation({
    mutationFn: (payload: Payload) => registerUser(payload),
  })
  return mutation
}
