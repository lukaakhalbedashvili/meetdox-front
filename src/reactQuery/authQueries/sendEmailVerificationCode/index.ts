import { useMutation } from 'react-query'
import { sendEmailCodeApiRequest } from '@/utils/api/authentication'
import { Payload } from './sendEmailVerificationCode.interface'

const sendEmailVerificationCode = async (payload: Payload) => {
  const { email, type } = payload

  const data = email && (await sendEmailCodeApiRequest(email, type))
  return data
}

export const useSendEmailVerificationCodeQuery = () => {
  const mutation = useMutation({
    mutationFn: (payload: Payload) => sendEmailVerificationCode(payload),
  })
  return mutation
}
