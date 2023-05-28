'use client'
import React from 'react'
import useDashboard from './useDashboard'
import DashboardContentWrapper from '../DashboardContent'
import DashboardSidebar from '../DashboardSidebar'

const Dashboard = () => {
  const { currentTab, setCurrentTab } = useDashboard()
  return (
    <div className="flex w-screen flex-col px-4 sm:flex-row sm:px-12 ">
      <DashboardSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <DashboardContentWrapper currentTab={currentTab} />
    </div>
  )
}

export default Dashboard
