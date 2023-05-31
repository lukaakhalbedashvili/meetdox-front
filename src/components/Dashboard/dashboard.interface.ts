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

export enum ScheduleTypes {
  MEETINGS_AS_CLIENT = 'meetingsAsClient',
  MEETINGS_AS_TEACHER = 'meetingsAsTeacher',
}

export enum ScheduleComponentStructureNames {
  TITLE1 = 'title1',
  TITLE2 = 'title2',
  BUTTON_RED = 'buttonRed',
  BUTTON_GREEN = 'buttonGreen',
  ON_BUTTON_RED_CLICK = 'onButtonRedClick',
  ON_BUTTON_GREEN_CLICK = 'onButtonGreenClick',
}

export interface ScheduleComponentStructure {
  [ScheduleComponentStructureNames.TITLE1]: string
  [ScheduleComponentStructureNames.TITLE2]: string
  [ScheduleComponentStructureNames.BUTTON_RED]: string
  [ScheduleComponentStructureNames.BUTTON_GREEN]: string
  [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: (params: any) => void
  [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: (params: any) => void
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
