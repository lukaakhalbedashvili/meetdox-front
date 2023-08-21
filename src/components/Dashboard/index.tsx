'use client'
import React from 'react'
import useDashboard from './useDashboard'
import DashboardContentWrapper from '../DashboardContent'
import DashboardSidebar from '../DashboardSidebar'
import PopupItemWrapper from '../PopupItemWrapper'
import RateTeacherPopup from '../RateTeacherPopup'
import RefundTeacherPopup from '../RefundTeacherPopup'

const Dashboard = () => {
  const { currentTab, setCurrentTab } = useDashboard()
  const [isRatePopupOpen, setIsRatePopupOpen] = React.useState(false)
  const [isRefundPopupOpen, setIsRefundPopupOpen] = React.useState(false)
  const [meetInfo, setMeetInfo] = React.useState({
    teacherUid: '',
    meetId: '',
    clientUid: '',
  })
  const handleDashboardPopupOpen = (
    popup: string,
    teacherUid: string,
    meetId: string,
    clientUid: string
  ) => {
    if (popup === 'rate') {
      setIsRatePopupOpen(true)
    } else if (popup === 'refund') {
      setIsRefundPopupOpen(true)
    }
    setMeetInfo({ teacherUid, meetId, clientUid })
  }
  return (
    <>
      <div className="flex w-screen flex-col px-4 sm:flex-row sm:px-12 ">
        <DashboardSidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />

        <DashboardContentWrapper
          currentTab={currentTab}
          handleDashboardPopupOpen={handleDashboardPopupOpen}
        />
      </div>
      {(isRatePopupOpen || isRefundPopupOpen) && (
        <PopupItemWrapper
          onOutsideClickHandler={() =>
            (isRatePopupOpen && setIsRatePopupOpen(false)) ||
            (isRefundPopupOpen && setIsRefundPopupOpen(false))
          }
        >
          {isRatePopupOpen && (
            <RateTeacherPopup
              onClose={() => setIsRatePopupOpen(false)}
              meetInfo={meetInfo}
            />
          )}
          {isRefundPopupOpen && (
            <RefundTeacherPopup
              onClose={() => setIsRefundPopupOpen(false)}
              meetInfo={meetInfo}
            />
          )}
        </PopupItemWrapper>
      )}
    </>
  )
}

export default Dashboard
