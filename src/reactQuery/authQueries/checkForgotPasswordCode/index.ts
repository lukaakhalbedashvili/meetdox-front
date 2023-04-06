import { useMutation } from 'react-query'
import { checkEmailCodeApiRequest } from '@/utils/api/authentication'
import { Payload } from './checkForgotPassword.interface'

export const useCheckForgotPasswordCode = () =>
  useMutation({
    mutationFn: async (payload: Payload) =>
      await checkEmailCodeApiRequest(payload.email, payload.code),
  })
