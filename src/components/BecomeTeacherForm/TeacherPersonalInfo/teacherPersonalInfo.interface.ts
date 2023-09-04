export interface TeacherPersonalInfoForm {
  name: string
  lastName: string
  birthMonth: string
  birthYear: string | number
  image?: string | null
}

export enum TeacherPersonalInfoFormInputNames {
  NAME = 'name',
  LAST_NAME = 'lastName',
  BIRTH_MONTH = 'birthMonth',
  BIRTH_YEAR = 'birthYear',
  IMAGE = 'image',
}
