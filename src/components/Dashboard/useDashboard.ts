import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { DashboardItemsNames } from './dashboard.interface'

const useDashboard = () => {
  const router = useRouter()
  const params = useSearchParams()
  const tab = params.get('tab')
  const [currentTab, setCurrentTab] = useState<DashboardItemsNames>(
    DashboardItemsNames.MEETINGS
  )
  const { setAlert, setIsLogInPopupOpen } = useZustandStore()
  const { refetch, data, isLoading } = useFetchLoggedInUserData()

  useEffect(() => {
    refetch().then((returnedData) => {
      if (!returnedData.data) {
        router.push('/')
        setAlert({
          message: 'Sign in first',
          type: AlertType.ERROR,
          onClick: () => {},
          duration: 2000,
        })
        setIsLogInPopupOpen(true)
      }
    })
    setCurrentTab(
      tab
        ? tab === 'personal'
          ? DashboardItemsNames.MEETINGS
          : DashboardItemsNames.MEETINGS_AS_TEACHER
        : DashboardItemsNames.MEETINGS
    )
  }, [])

  return {
    currentTab,
    setCurrentTab,
    data,
    isLoading,
  }
}

export default useDashboard
