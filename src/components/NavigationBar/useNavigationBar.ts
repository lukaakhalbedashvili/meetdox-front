import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'

const useNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false)
  const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false)
  const [isForgotPasswordPopupOpen, setIsForgotPasswordPopupOpen] =
    useState(false)
  const [isShowSearchScreen, setIsShowSearchScreen] = useState(false)
  const [isShowNotificationScreen, setIsShowNotificationScreen] =
    useState(false)

  const { data } = useFetchLoggedInUserData()

  const loggedInUser = data?.data.data

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
