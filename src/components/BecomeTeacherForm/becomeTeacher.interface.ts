import { AboutTeacherForm } from './AboutTeacher/AboutTeacher.interface'
import { TeacherContactValidationForm } from './TeacherContact/teacherContact.interface'
import { TeacherDomainInfoValidationForm } from './TeacherDomain/teacherDomain.interface'

import { TeacherEducationInfoValidationForm } from './TeacherEducation/TeacherEducationFormSection/teacherEducation.interface'
import { TeacherExperienceForm } from './TeacherExperience/TeacherExperienceFormSection/teacherExperience.interface'
import { TeacherPersonalInfoForm } from './TeacherPersonalInfo/teacherPersonalInfo.interface'

export interface BecomeTeacherSectionsErrors {
  personalDetails: boolean
  education: boolean
  experience: boolean
  skills: boolean
  domain: boolean
  contact: boolean
  about: boolean
  compensationForm: boolean
}

export interface FormValues {
  personalDetails: TeacherPersonalInfoForm
  teacherEducation: TeacherEducationInfoValidationForm[]
  teacherExperience: TeacherExperienceForm[]
  skills: string[]
  domain: TeacherDomainInfoValidationForm
  contact: TeacherContactValidationForm
  about: AboutTeacherForm
  perHour: string
}
