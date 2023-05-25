import React, { useState } from 'react'
import dashboardItems from '@/data/dashboardItems'
import DashboardSidebarButton from '@/elements/DashboardSidebarButton'

const DashboardSidebar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>(
    dashboardItems[0].title
  )

  const handleDashboardItemChange = (index: string) => {
    setSelectedButton(index)
  }

  return (
    <div className="bg-gray-200 flex h-screen w-72 flex-col justify-between p-4">
      <div className="space-y-4">
        {dashboardItems.map((item) => (
          <DashboardSidebarButton
            key={item.id}
            Icon={item.icon}
            text={item.title}
            isSelected={selectedButton === item.title}
            onClick={() => handleDashboardItemChange(item.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebar
