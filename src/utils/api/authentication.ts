import axios from 'axios'
import { VerifyEmailCodeType } from './api.interface'
import { API_URL } from '../consts/consts'

export const registrationApiRequest = async (
  email: string,
  username: string,
  code: string
) => {
  const response = await axios.post(
    `${API_URL}/users/authentication/registration`,
    {
      email,
      username,
      code,
    }
  )
  return response
}

export const googleRegistrationApiRequest = async (
  email?: string,
  displayName?: string,
  photoURL?: string,
  uid?: string
) => {
  const response = await axios
    .post(`${API_URL}/users/authentication/google-registration`, {
      email,
      displayName,
      photoURL,
      uid,
    })
    .then((res) => res.data)
  return response
}

export const sendEmailCodeApiRequest = async (
  email: string,
  type?: VerifyEmailCodeType
) => {
  const response = await axios.post(
    `${API_URL}/users/authentication/send-email-code?type=${type}`,
    {
      email,
    }
  )
  return response
}

export const resetPasswordApiRequest = async (
  email: string,
  code: string,
  password: string
) => {
  const response = await axios.post(
    `${API_URL}/users/authentication/reset-password`,
    {
      email,
      code,
      password,
    }
  )
  return response
}

export const checkEmailCodeApiRequest = async (email: string, code: string) => {
  const response = await axios.post(
    `${API_URL}/users/authentication/check-email-code`,
    {
      email,
      code,
    }
  )
  return response
}
