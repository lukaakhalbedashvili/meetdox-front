interface ContactDetails {
  phone: string
  phoneExtension: string
  country: string
  createdAt: string
  description: string
  domain: string
  category: string
  subCategories: string[]
  image: string
}

interface PersonalDetails {
  birthMonth: string
  birthYear: number
  lastName: string
  name: string
  skills: string[]
}

interface TeacherEducation {
  degree: string
  description: string
  endYear: number
  institutionName: string
  startYear: number
}

interface TeacherExperience {
  description: string
  endYear: number
  institutionName: string
  startYear: number
  title: string
}

export interface TeacherData {
  contactDetails: ContactDetails
  personalDetails: PersonalDetails
  status: string
  teacherEducation: TeacherEducation[]
  teacherExperience: TeacherExperience[]
  uid: string
  updatedAt: string
  verified: boolean
}
