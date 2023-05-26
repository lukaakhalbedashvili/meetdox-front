import React, { useState } from 'react'
import dashboardItems from '@/data/dashboardItems'

const useDashboardSidebar = () => {
  const [selectedButton, setSelectedButton] = useState<string>(
    dashboardItems[0].title
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDashboardItemChange = (index: string) => {
    setSelectedButton(index)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const ActiveIcon = dashboardItems.find(
    (item) => item.title === selectedButton
  )?.icon as React.ElementType

  return {
    selectedButton,
    handleDashboardItemChange,
    isDropdownOpen,
    toggleDropdown,
    ActiveIcon,
  }
}

export default useDashboardSidebar
