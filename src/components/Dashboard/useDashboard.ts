import { useState } from 'react'
import { DashboardItemsNames } from './dashboard.interface'

const useDashboard = () => {
  const [currentTab, setCurrentTab] = useState<DashboardItemsNames>(
    DashboardItemsNames.MEETINGS
  )
  return {
    currentTab,
    setCurrentTab,
  }
}

export default useDashboard
