export interface TeacherContactValidationForm {
  phone: string
  email: string
  country: string
}

export enum ContactName {
  PHONE = 'phone',
  EMAIL = 'email',
  COUNTRY = 'country',
}
