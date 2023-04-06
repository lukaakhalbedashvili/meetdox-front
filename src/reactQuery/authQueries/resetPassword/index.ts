import { useMutation } from 'react-query'
import { resetPasswordApiRequest } from '@/utils/api/authentication'
import { Payload } from './resetPassword.interface'

export const useResetPasswordQuery = () =>
  useMutation({
    mutationFn: async (payload: Payload) => {
      const { email, code, password } = payload
      await resetPasswordApiRequest(email, code, password)
    },
  })
