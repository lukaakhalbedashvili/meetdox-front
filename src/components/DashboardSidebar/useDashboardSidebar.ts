import React, { useState } from 'react'
import dashboardItems from '@/data/dashboardItems'

interface UseDashboardSidebarProps {
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}

const useDashboardSidebar = ({
  currentTab,
  setCurrentTab,
}: UseDashboardSidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDashboardItemChange = (title: string) => {
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
