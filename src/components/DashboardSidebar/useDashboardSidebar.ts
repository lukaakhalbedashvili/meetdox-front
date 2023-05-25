import { useState } from 'react'
import dashboardItems from '@/data/dashboardItems'

const useDashboardSidebar = () => {
  const [selectedButton, setSelectedButton] = useState<string>(
    dashboardItems[0].title
  )

  const handleDashboardItemChange = (index: string) => {
    setSelectedButton(index)
  }

  return {
    selectedButton,
    handleDashboardItemChange,
  }
}

export default useDashboardSidebar
