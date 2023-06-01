import React from 'react'
import { teacherDashboardItems } from '@/data/dashboardItems'
import { DashboardItemsNames } from '../Dashboard/dashboard.interface'

interface DashboardContentWrapperProps {
  currentTab: DashboardItemsNames
}

const DashboardContentWrapper = ({
  currentTab,
}: DashboardContentWrapperProps) => {
  const CurrentTabData = teacherDashboardItems.find(
    (item) => item.title === currentTab
  )?.tab!

  return (
    <div className="mt-4 w-full sm:mt-0 sm:pl-8">
      <CurrentTabData />
    </div>
  )
}

export default DashboardContentWrapper
