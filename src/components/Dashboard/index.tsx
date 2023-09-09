'use client'
import React from 'react'
import { ClipLoader } from 'react-spinners'
import useDashboard from './useDashboard'
import DashboardContentWrapper from '../DashboardContent'
import DashboardSidebar from '../DashboardSidebar'

const Dashboard = () => {
  const { currentTab, setCurrentTab, data, isLoading } = useDashboard()

  return (
    <>
      {!isLoading ? (
        <div className="flex w-screen flex-col px-4 sm:flex-row sm:px-12 ">
          <DashboardSidebar
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            data={data?.data}
          />

          <DashboardContentWrapper currentTab={currentTab} />
        </div>
      ) : (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}
    </>
  )
}

export default Dashboard
