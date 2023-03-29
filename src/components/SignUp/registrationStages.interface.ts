export enum RegistrationStages {
  ACCOUNT_DETAILS = 'accountDetails',
  EMAIL_VERIFY = 'emailVerify',
}

export interface User {
  email: string
  username: string
  password: string
}
