import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'
import { DashboardItemsNames } from './dashboard.interface'

const useDashboard = () => {
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState<DashboardItemsNames>(
    DashboardItemsNames.MEETINGS
  )
  const { setAlert, setIsLogInPopupOpen } = useZustandStore()
  const { data, refetch } = useFetchLoggedInUserData()

  refetch().then(() => {
    if (!data?.data) {
      router.push('/')
      setAlert({
        message: 'Sign in first',
        type: AlertType.ERROR,
        onClick: () => {},
        duration: 5000,
      })
      setIsLogInPopupOpen(true)
    }
  })
  return {
    currentTab,
    setCurrentTab,
  }
}

export default useDashboard
