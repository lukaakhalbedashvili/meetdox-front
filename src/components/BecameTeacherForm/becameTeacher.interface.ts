import { TeacherContactValidationForm } from './TeacherContact/teacherContact.interface'
import { TeacherDomainInfoValidationForm } from './TeacherDomain/teacherDomain.interface'
import { TeacherEducationInfoValidationForm } from './TeacherEducation/TeacherEducationFormSection/teacherEducation.interface'
import { TeacherExperienceForm } from './TeacherExperience/TeacherExperienceFormSection/teacherExperience.interface'
import { TeacherPersonalInfoForm } from './TeacherPersonalInfo/teacherPersonalInfo.interface'

export interface BecameTeacherSections {
  personalInfo: boolean
  education: boolean
  experience: boolean
  skills: boolean
  domain: boolean
  contact: boolean
}

export interface FormValues {
  personalInfo: TeacherPersonalInfoForm
  teacherEducation: TeacherEducationInfoValidationForm[]
  teacherExperience: TeacherExperienceForm[]
  skills: string[]
  teacherDomain: TeacherDomainInfoValidationForm
  contact: TeacherContactValidationForm
}