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
  rate: number
  perHour: number
  reviews: []
}

export interface GetTeacherData {
  teachers: TeacherData[] | []
  totalItems: number
}

export interface GetTeacherDataForLanding {
  categorizedTeachers:
    | {
        header: string
        categoryItems: TeacherData[]
      }[]
    | []
}

export interface TeacherExperience {
  company: string
  major: string
  startDate: number
  description: string
  title: string
  endDate: number
  id: number
  position: string
}

export interface ContactDetails {
  phone: string
  phoneExtension: string
}

export interface TeacherEducation {
  university: string
  major: string
  startDate: number
  endDate: number
  id: number
}

export interface Domain {
  category: string
  subCategories: string[]
}

export interface PersonalDetails {
  lastName: string
  birthMonth: string
  birthYear: number
  name: string
}

interface Timestamp {
  _seconds: number
  _nanoseconds: number
}
