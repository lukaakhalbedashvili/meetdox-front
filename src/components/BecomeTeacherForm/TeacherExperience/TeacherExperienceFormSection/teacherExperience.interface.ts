export interface TeacherExperienceForm {
  company: string
  position: string
  description: string
  startDate: string | number
  endDate: string | number
  id: number
}

export enum TeacherExperienceInfoValidationFormInputNames {
  COMPANY = 'company',
  POSITION = 'position',
  DESCRIPTION = 'description',
  START_DATE = 'startDate',
  END_DATE = 'endDate',
}

export interface Suggestion {
  skill: { name: string }
}
