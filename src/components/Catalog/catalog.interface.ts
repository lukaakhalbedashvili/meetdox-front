export interface TeacherData {
  image: string
  country: string
  teacherExperience: TeacherExperience[]
  verified: boolean
  description: string
  contactDetails: ContactDetails
  skills: string[]
  uid: string
  createdAt: Timestamp
  teacherEducation: TeacherEducation[]
  domain: Domain
  personalDetails: PersonalDetails
  status: string
  updatedAt: Timestamp
}

export interface GetTeacherData {
  teachers: TeacherData[] | []
  totalItems: number
}

export interface GetTeacherDataForLanding {
  [key: string]: TeacherData[] | []
}

interface TeacherExperience {
  institutionName: string
  startYear: number
  description: string
  title: string
  endYear: number
}

interface ContactDetails {
  phone: string
  phoneExtension: string
}

interface TeacherEducation {
  institutionName: string
  degree: string
  startYear: number
  description: string
  endYear: number
}

interface Domain {
  category: string
  subCategories: string[]
}

interface PersonalDetails {
  lastName: string
  birthMonth: string
  birthYear: number
  name: string
}

interface Timestamp {
  _seconds: number
  _nanoseconds: number
}
