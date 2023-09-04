export interface TeacherContactValidationForm {
  phone: string
  country: string
  phoneExtension: string
}

export enum ContactName {
  PHONE = 'phone',
  COUNTRY = 'country',
  PHONE_EXTENSION = 'phoneExtension',
}
