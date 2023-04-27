export interface TeacherEducationInfoValidationForm {
  company: string
  position: string
  description?: string
  startDate: string
  endDate: string
}

export enum TeacherEducationInfoValidationFormInputNames {
  COMPANY = 'company',
  POSITION = 'position',
  DESCRIPTION = 'description',
  START_DATE = 'startDate',
  END_DATE = 'endDate',
}

export interface Suggestion {
  skill: { name: string }
}
