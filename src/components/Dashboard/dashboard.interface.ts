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
