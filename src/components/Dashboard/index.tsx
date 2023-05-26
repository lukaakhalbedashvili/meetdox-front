'use client'
import React from 'react'
import DashboardContentWrapper from '../DashboardContent'
import DashboardSidebar from '../DashboardSidebar'

const Dashboard = () => {
  return (
    <div className="flex w-screen px-12">
      <DashboardSidebar />
      <DashboardContentWrapper />
    </div>
  )
}

export default Dashboard
