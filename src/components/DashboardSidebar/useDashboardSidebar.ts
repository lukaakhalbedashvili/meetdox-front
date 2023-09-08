import { Dispatch, SetStateAction, useState } from 'react'
import {
  clientDashboardItems,
  teacherDashboardItems,
} from '@/data/dashboardItems'

import { UserData } from '@/reactQuery/getUserData/getUserData.interface'
import {
  DashboardItemsNames,
  DashboardItemStructure,
} from '../Dashboard/dashboard.interface'

interface UseDashboardSidebarProps {
  currentTab: DashboardItemsNames
  data: UserData | undefined
  setCurrentTab: Dispatch<SetStateAction<DashboardItemsNames>>
}

const useDashboardSidebar = ({
  currentTab,
  setCurrentTab,
  data,
}: UseDashboardSidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dashboardItems =
    data?.data.isTeacher !== true ? clientDashboardItems : teacherDashboardItems

  const handleDashboardItemChange = (title: DashboardItemsNames) => {
    setCurrentTab(title)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const ActiveIcon = dashboardItems?.find(
    (item: DashboardItemStructure) => item.title === currentTab
  )!.icon

  return {
    handleDashboardItemChange,
    isDropdownOpen,
    toggleDropdown,
    ActiveIcon,
    dashboardItems,
  }
}

export default useDashboardSidebar
