// user icon
import { FiUser, FiLock } from 'react-icons/fi'
import DashboardProfileContent from '@/components/DashboardProfileContent'
import DashboardPasswordChangeContent from '@/components/DashboardPasswordChangeContent'

const dashboardItems = [
  {
    id: 1,
    title: 'Profile',
    icon: FiUser,
    tab: DashboardProfileContent,
  },
  {
    id: 2,
    title: 'Password',
    icon: FiLock,
    tab: DashboardPasswordChangeContent,
  },
]

export default dashboardItems
