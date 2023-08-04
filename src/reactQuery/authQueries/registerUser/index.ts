import { useMutation } from '@tanstack/react-query'
import { registrationApiRequest } from '@/utils/api/authentication'
import { Payload } from './registerUser.interface'

export const useRegisterUserQuery = () =>
  useMutation({
    mutationFn: async (payload: Payload) => {
      const { code, email, username, password } = payload
      await registrationApiRequest(email, username, code, password)
    },
  })
