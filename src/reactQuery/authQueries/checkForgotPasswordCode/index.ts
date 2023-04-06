import { useMutation } from 'react-query'
import { checkEmailCodeApiRequest } from '@/utils/api/authentication'
import { Payload } from './checkForgotPassword.interface'

const sendForgotPasswordCodeVerification = async (payload: Payload) => {
  const { email, code } = payload

  const data = await checkEmailCodeApiRequest(email, code)
  return data
}

export const useCheckForgotPasswordCode = () => {
  return useMutation({
    mutationFn: (payload: Payload) =>
      sendForgotPasswordCodeVerification(payload),
  })
}
