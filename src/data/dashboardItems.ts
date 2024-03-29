import { AiOutlineSchedule } from 'react-icons/ai'
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
]

export { clientDashboardItems, teacherDashboardItems }
