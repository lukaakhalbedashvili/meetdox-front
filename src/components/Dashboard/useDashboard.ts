import { useState } from 'react'
import dashboardItems from '@/data/dashboardItems'

const useDashboard = () => {
  const [currentTab, setCurrentTab] = useState(dashboardItems[0].title)
  return {
    currentTab,
    setCurrentTab,
  }
}

export default useDashboard
