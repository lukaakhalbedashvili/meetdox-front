export enum TeacherQualification {
  BACHELOR = 'BACHELOR',
  MASTER = 'MASTER',
  PHD = 'PHD',
}
export interface TeacherPersonalInfoForm {
  name: string
  lastName: string
  middleName: string
  birthDate: string
}
export enum TeacherPersonalInfoFormInputs {
  NAME = 'name',
  LAST_NAME = 'lastName',
  MIDDLE_NAME = 'middleName',
  BIRTH_MONTH = 'birthMonth',
  BIRTH_YEAR = 'birthYear',
}
