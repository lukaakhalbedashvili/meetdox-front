import React, { Dispatch, SetStateAction, useState } from 'react'
import dashboardItems from '@/data/dashboardItems'
import { DashboardItemsNames } from '../Dashboard/dashboard.interface'

interface UseDashboardSidebarProps {
  currentTab: DashboardItemsNames
  setCurrentTab: Dispatch<SetStateAction<DashboardItemsNames>>
}

const useDashboardSidebar = ({
  currentTab,
  setCurrentTab,
}: UseDashboardSidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDashboardItemChange = (title: DashboardItemsNames) => {
    setCurrentTab(title)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const ActiveIcon = dashboardItems.find((item) => item.title === currentTab)
    ?.icon as React.ElementType

  return {
    handleDashboardItemChange,
    isDropdownOpen,
    toggleDropdown,
    ActiveIcon,
  }
}

export default useDashboardSidebar
