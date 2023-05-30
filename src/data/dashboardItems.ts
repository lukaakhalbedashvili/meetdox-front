import { FiUser as UserIcon, FiLock } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import DashboardProfileContent from '@/components/DashboardProfileContent'
import DashboardPasswordChangeContent from '@/components/DashboardPasswordChangeContent'
import { DashboardItemsNames } from '@/components/Dashboard/dashboard.interface'
import DashboardTeacherMeetsContent from '@/components/DashboardClientMeetsContent'

const clientDashboardItems = [
  {
    id: 1,
    title: DashboardItemsNames.PROFILE,
    icon: UserIcon,
    tab: DashboardProfileContent,
  },
  {
    id: 2,
    title: DashboardItemsNames.PASSWORD,
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
  {
    id: 3,
    title: DashboardItemsNames.MEETINGS,
    icon: AiOutlineSchedule,
    tab: DashboardTeacherMeetsContent,
  },
]

const teacherDashboardItems = [
  {
    id: 1,
    title: DashboardItemsNames.PROFILE,
    icon: UserIcon,
    tab: DashboardProfileContent,
  },
  {
    id: 2,
    title: DashboardItemsNames.PASSWORD,
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
  {
    id: 3,
    title: DashboardItemsNames.MEETINGS,
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
    id: 5,
    title: DashboardItemsNames.MEETINGS_AS_TEACHER,
    icon: AiOutlineSchedule,
    tab: DashboardTeacherMeetsContent,
  },
]

export { clientDashboardItems, teacherDashboardItems }
