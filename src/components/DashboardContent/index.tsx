import React from 'react'
import { teacherDashboardItems } from '@/data/dashboardItems'
import { DashboardItemsNames } from '../Dashboard/dashboard.interface'

interface DashboardContentWrapperProps {
  currentTab: DashboardItemsNames
  handleDashboardPopupOpen: (
    popup: string,
    teacherUid: string,
    meetId: string,
    clientUid: string
  ) => void
}

const DashboardContentWrapper = ({
  currentTab,
  handleDashboardPopupOpen,
}: DashboardContentWrapperProps) => {
  const CurrentTabData = teacherDashboardItems.find(
    (item: any) => item.title === currentTab
  )?.tab!

  return (
    <div className="mt-4 w-full sm:mt-0 sm:pl-8">
      <CurrentTabData handleDashboardPopupOpen={handleDashboardPopupOpen} />
    </div>
  )
}

export default DashboardContentWrapper
