import { IconType } from 'react-icons'
import { ReactNode } from 'react'

export enum DashboardItemsNames {
  PROFILE = 'Profile',
  PASSWORD = 'Password',
  MEETINGS = 'Meetings',
  PAYMENTS = 'Payments',
  MEETINGS_AS_TEACHER = 'Meetings as teacher',
}

export interface DashboardItemStructure {
  id: number
  title: DashboardItemsNames
  icon: IconType
  tab: () => ReactNode
}

export enum ScheduleStepStatus {
  SCHEDULED_BY_USER = 'scheduledByUser',
  CANCELED_BY_USER = 'canceledByUser',
  CANCELED_BY_TEACHER = 'canceledByTeacher',
  CONFIRMED_BY_TEACHER = 'confirmedByTeacher',
  PAID_BY_USER = 'paidByUser',
  COMPLETED = 'completed',
}

// upper case

export enum ScheduleTypes {
  MEETINGS_AS_CLIENT = 'meetingsAsClient',
  MEETINGS_AS_TEACHER = 'meetingsAsTeacher',
}

export interface ScheduleComponentStructure {
  title1: string
  title2: string
  buttonRed: string
  buttonGreen: string
  onButtonRedClick: (params: any) => void
  onButtonGreenClick: (params: any) => void
}

export interface MeetingSteps {
  [ScheduleStepStatus.SCHEDULED_BY_USER]: ScheduleComponentStructure
  [ScheduleStepStatus.CANCELED_BY_USER]: ScheduleComponentStructure
  [ScheduleStepStatus.CANCELED_BY_TEACHER]: ScheduleComponentStructure
  [ScheduleStepStatus.CONFIRMED_BY_TEACHER]: ScheduleComponentStructure
  [ScheduleStepStatus.PAID_BY_USER]: ScheduleComponentStructure
  [ScheduleStepStatus.COMPLETED]: ScheduleComponentStructure
}

export interface ScheduleSteps {
  [ScheduleTypes.MEETINGS_AS_CLIENT]: MeetingSteps
  [ScheduleTypes.MEETINGS_AS_TEACHER]: MeetingSteps
}
