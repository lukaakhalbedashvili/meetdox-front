'use client'
import React from 'react'
import DashboardContentWrapper from '../DashboardContent'
import DashboardSidebar from '../DashboardSidebar'

const Dashboard = () => {
  return (
    <div className="flex w-screen flex-col px-4 sm:flex-row sm:px-12 ">
      <DashboardSidebar />
      <DashboardContentWrapper />
    </div>
  )
}

export default Dashboard
