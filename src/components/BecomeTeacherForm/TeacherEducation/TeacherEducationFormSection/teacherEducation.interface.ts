export interface TeacherEducationInfoValidationForm {
  id: number
  university: string
  major: string
  startDate: string | number
  endDate: string | number
}

export enum TeacherEducationInfoValidationFormInputNames {
  UNIVERSITY = 'university',
  MAJOR = 'major',
  START_DATE = 'startDate',
  END_DATE = 'endDate',
}

export interface Suggestion {
  skill: { name: string }
}
