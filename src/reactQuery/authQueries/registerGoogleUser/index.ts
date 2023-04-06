import { useMutation } from 'react-query'
import { googleRegistrationApiRequest } from '@/utils/api/authentication'
import { Payload } from './registerGoogleUser.interface'

const registerGoogleUser = async (payload: Payload) => {
  const { displayName, email, photoURL, uid } = payload

  if (!displayName || !email || !photoURL || !uid) {
    return
  }
  const data = await googleRegistrationApiRequest(
    email,
    displayName,
    photoURL,
    uid
  )
  return data
}

export const useRegisterGoogleUserQuery = () => {
  const mutation = useMutation({
    mutationFn: (payload: Payload) => registerGoogleUser(payload),
  })
  return mutation
}
