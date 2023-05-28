import React from 'react'
import dashboardItems from '@/data/dashboardItems'
// import DashboardProfileContent from '../DashboardProfileContent'
// import DashboardPasswordChangeContent from '../DashboardPasswordChangeContent'

interface DashboardContentWrapperProps {
  currentTab: string
}

const DashboardContentWrapper = ({
  currentTab,
}: DashboardContentWrapperProps) => {
  const CurrentTabData = dashboardItems.find(
    (item) => item.title === currentTab
  )?.tab as React.ElementType
  return (
    <div className="mt-4 w-full sm:mt-0 sm:pl-8">
      <CurrentTabData />
    </div>
  )
}

export default DashboardContentWrapper
