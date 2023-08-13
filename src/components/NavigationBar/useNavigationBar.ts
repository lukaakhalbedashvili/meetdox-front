import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { useZustandStore } from '@/zustand'

const useNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false)

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
  } = useZustandStore()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    data?.data?.data && setLoggedInUser(data?.data.data)
  }, [data?.data?.data, setLoggedInUser])

  return {
    isOpen,
    setIsOpen,
    pathname,
    isSignUpPopupOpen,
    setIsSignUpPopupOpen,
    isLogInPopupOpen,
    setIsLogInPopupOpen,
    isForgotPasswordPopupOpen,
    setIsForgotPasswordPopupOpen,
    isShowSearchScreen,
    setIsShowSearchScreen,
    loggedInUser,
    isShowNotificationScreen,
    setIsShowNotificationScreen,
  }
}

export default useNavigationBar
