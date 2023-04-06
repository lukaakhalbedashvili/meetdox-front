import { useMutation } from 'react-query'
import { googleRegistrationApiRequest } from '@/utils/api/authentication'
import { Payload } from './registerGoogleUser.interface'

export const useRegisterGoogleUserQuery = () =>
  useMutation({
    mutationFn: async (payload: Payload) => {
      const { email, displayName, photoURL, uid } = payload
      return await googleRegistrationApiRequest(
        email,
        displayName,
        photoURL,
        uid
      )
    },
  })
