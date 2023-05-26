import { NotificationStructure } from '@/components/NavigationLoggedIn/navigationLoggedIn.interface'

export interface UserData {
  data: {
    email: string
    username: string
    photoURL: string
    uid: string
    isTeacher: boolean
    notifications: NotificationStructure[]
    unreadNotificationAmount: number
  }
}
