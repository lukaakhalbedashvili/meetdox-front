import { useState } from 'react'
import { DashboardItemsNames } from './dashboard.interface'

const useDashboard = () => {
  const [currentTab, setCurrentTab] = useState<DashboardItemsNames>(
    DashboardItemsNames.PROFILE
  )
  return {
    currentTab,
    setCurrentTab,
  }
}

export default useDashboard
