export interface TeacherPersonalInfoForm {
  name: string
  lastName: string
  middleName: string
  birthMonth: string
  birthYear: string
}

export enum TeacherPersonalInfoFormInputNames {
  NAME = 'name',
  LAST_NAME = 'lastName',
  MIDDLE_NAME = 'middleName',
  BIRTH_MONTH = 'birthMonth',
  BIRTH_YEAR = 'birthYear',
}
