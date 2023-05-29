import { FiUser as UserIcon, FiLock } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import DashboardProfileContent from '@/components/DashboardProfileContent'
import DashboardPasswordChangeContent from '@/components/DashboardPasswordChangeContent'
import { DashboardItemsNames } from '@/components/Dashboard/dashboard.interface'
import DashboardTeacherMeetsContent from '@/components/DashboardClientMeetsContent'

const dashboardItems = [
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

export default dashboardItems
