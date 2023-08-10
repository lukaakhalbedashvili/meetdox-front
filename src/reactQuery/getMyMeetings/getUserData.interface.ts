import { ScheduleStepStatus } from '@/components/Dashboard/dashboard.interface'

export interface ScheduledMeetStructure {
  clientImg: string
  clientUid: string
  hangoutLink: string
  clientUsername: string
  comment: string
  createdAt: number
  date: string
  duration: number
  meetId: string
  perHour: number
  status: ScheduleStepStatus
  teacherImg: string
  teacherUid: string
  teacherUsername: string
  time: number
  timeZone: number
  paymentDetails: {
    createdDate: string
    transactionId: string
    transactionUrl: string
  }
  googleMeetingDetails: any
}
