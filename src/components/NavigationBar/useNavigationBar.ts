import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { useZustandStore } from '@/zustand'

const useNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [isForgotPasswordPopupOpen, setIsForgotPasswordPopupOpen] =
    useState(false)
  const [isShowSearchScreen, setIsShowSearchScreen] = useState(false)
  const [isShowNotificationScreen, setIsShowNotificationScreen] =
    useState(false)

  const { data, refetch } = useFetchLoggedInUserData()

  const {
    isLogInPopupOpen,
    setIsLogInPopupOpen,
    setLoggedInUser,
    loggedInUser,
    isSignupPopupOpen,
    setIsSignupPopupOpen,
  } = useZustandStore()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    data?.data?.data && setLoggedInUser(data?.data.data)
  }, [data, setLoggedInUser])

  return {
    isOpen,
    setIsOpen,
    pathname,
    isSignupPopupOpen,
    setIsSignupPopupOpen,
    isLogInPopupOpen,
    setIsLogInPopupOpen,
    isForgotPasswordPopupOpen,
    setIsForgotPasswordPopupOpen,
    isShowSearchScreen,
    setIsShowSearchScreen,
    loggedInUser,
    isShowNotificationScreen,
    setIsShowNotificationScreen,
    router,
  }
}

export default useNavigationBar
