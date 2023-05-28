import { FiUser as UserIcon, FiLock } from 'react-icons/fi'
import DashboardProfileContent from '@/components/DashboardProfileContent'
import DashboardPasswordChangeContent from '@/components/DashboardPasswordChangeContent'
import { DashboardItemsNames } from '@/components/Dashboard/dashboard.interface'

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
]

export default dashboardItems
