import { useMutation } from '@tanstack/react-query'
import { sendEmailCodeApiRequest } from '@/utils/api/authentication'
import { Payload } from './sendEmailVerificationCode.interface'

export const useSendEmailVerificationCodeQuery = () =>
  useMutation({
    mutationFn: async (payload: Payload) => {
      const { email, type } = payload
      if (!email) return
      await sendEmailCodeApiRequest(email, type)
    },
  })
