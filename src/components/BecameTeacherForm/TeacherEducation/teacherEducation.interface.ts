export interface TeacherEducationInfoValidationForm {
  university: string
  major: string
  startDate: string
  endDate: string
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
