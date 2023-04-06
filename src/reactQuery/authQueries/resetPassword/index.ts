import { useMutation } from 'react-query'
import { resetPasswordApiRequest } from '@/utils/api/authentication'
import { Payload } from './resetPassword.interface'

const resetPassword = async (payload: Payload) => {
  const { email, code, password } = payload

  const data = await resetPasswordApiRequest(email, code, password)
  return data
}

export const useResetPasswordQuery = () => {
  const mutation = useMutation({
    mutationFn: (payload: Payload) => resetPassword(payload),
  })
  return mutation
}
