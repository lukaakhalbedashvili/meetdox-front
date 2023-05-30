import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  clientDashboardItems,
  teacherDashboardItems,
} from '@/data/dashboardItems'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'

import {
  DashboardItemsNames,
  DashboardItemStructure,
} from '../Dashboard/dashboard.interface'

interface UseDashboardSidebarProps {
  currentTab: DashboardItemsNames
  setCurrentTab: Dispatch<SetStateAction<DashboardItemsNames>>
}

const useDashboardSidebar = ({
  currentTab,
  setCurrentTab,
}: UseDashboardSidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dashboardItems, setDashboardItems] =
    useState<DashboardItemStructure[]>(clientDashboardItems)

  const handleDashboardItemChange = (title: DashboardItemsNames) => {
    setCurrentTab(title)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const { data } = useFetchLoggedInUserData()

  useEffect(() => {
    if (data?.data.data.isTeacher === true) {
      setDashboardItems(teacherDashboardItems)
    }
  }, [data])

  const ActiveIcon = dashboardItems.find(
    (item: DashboardItemStructure) => item.title === currentTab
  )?.icon as React.ElementType

  return {
    handleDashboardItemChange,
    isDropdownOpen,
    toggleDropdown,
    ActiveIcon,
    dashboardItems,
  }
}

export default useDashboardSidebar
