import { NotificationStructure } from '@/components/NavigationLoggedIn/navigationLoggedIn.interface'

export interface UserData {
  data: {
    email: string
    username: string
    photoURL: string
    uid: string
    teacherBalance: number
    isTeacher: boolean
    notifications: NotificationStructure[]
  }
}
