import { FiLock } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import DashboardPasswordChangeContent from '@/components/DashboardPasswordChangeContent'
import { DashboardItemsNames } from '@/components/Dashboard/dashboard.interface'
import DashboardClientMeetsContent from '@/components/DashboardClientMeetsContent'
import DashboardTeacherMeetsContent from '@/components/DashboardTeacherMeetsContent '

const clientDashboardItems = [
  {
    id: 3,
    title: DashboardItemsNames.MEETINGS,
    icon: AiOutlineSchedule,
    tab: DashboardClientMeetsContent,
  },
  {
    id: 2,
    title: DashboardItemsNames.PASSWORD,
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
]

const teacherDashboardItems = [
  {
    id: 3,
    title: DashboardItemsNames.MEETINGS,
    icon: AiOutlineSchedule,
    tab: DashboardClientMeetsContent,
  },

  {
    id: 5,
    title: DashboardItemsNames.MEETINGS_AS_TEACHER,
    icon: AiOutlineSchedule,
    tab: DashboardTeacherMeetsContent,
  },
  {
    id: 4,
    title: DashboardItemsNames.PAYMENTS,
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
  {
    id: 2,
    title: DashboardItemsNames.PASSWORD,
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
]

export { clientDashboardItems, teacherDashboardItems }
