import { IconType } from 'react-icons'
import { ReactNode } from 'react'

export enum DashboardItemsNames {
  PROFILE = 'Profile',
  PASSWORD = 'Password',
  MEETINGS = 'Meetings',
  PAYMENTS = 'Payments',
  MEETINGS_AS_TEACHER = 'Meetings as expert',
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
  EXPIRED = 'expired',
  REVIEWED = 'reviewed',
  REFUND_ASKED = 'refundAsked',
}

export enum ScheduleTypes {
  MEETINGS_AS_CLIENT = 'meetingsAsClient',
  MEETINGS_AS_TEACHER = 'meetingsAsTeacher',
}

export interface ScheduleComponentStructure {
  title1: string
  title2: string
  buttonRed: string
  buttonGreen: string
  onButtonRedClick: string | Function
  onButtonGreenClick: string | Function
}

export interface MeetingSteps {
  scheduledByUser: ScheduleComponentStructure
  canceledByUser: ScheduleComponentStructure
  canceledByTeacher: ScheduleComponentStructure
  confirmedByTeacher: ScheduleComponentStructure
  paidByUser: ScheduleComponentStructure
  completed: ScheduleComponentStructure
  expired: ScheduleComponentStructure
  reviewed: ScheduleComponentStructure
  refundAsked: ScheduleComponentStructure
}

export interface ScheduleSteps {
  meetingsAsClient: MeetingSteps
  meetingsAsTeacher: MeetingSteps
}
