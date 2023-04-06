import { VerifyEmailCodeType } from '@/utils/api/api.interface'

export interface Payload {
  email?: string
  type: VerifyEmailCodeType
}
