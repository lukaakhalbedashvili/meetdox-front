import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'

const useNavigationLoggedIn = () => {
  const router = useRouter()
  const profileDropdownRef = useRef<HTMLDivElement>(null)
  const notificationsDropDownRef = useRef<HTMLDivElement>(null)
  const userAvatarRef = useRef<HTMLButtonElement>(null)
  const notificationsIconRef = useRef<HTMLButtonElement>(null)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  useOnOutsideClick([profileDropdownRef, userAvatarRef], () =>
    setIsProfileOpen(false)
  )

  useOnOutsideClick([notificationsDropDownRef, notificationsIconRef], () =>
    setIsNotificationsOpen(false)
  )

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
    setIsProfileOpen(false)
  }

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen)
    setIsNotificationsOpen(false)
  }

  return {
    handleNotificationsClick,
    handleProfileClick,
    isNotificationsOpen,
    isProfileOpen,
    setIsProfileOpen,
    profileDropdownRef,
    userAvatarRef,
    notificationsDropDownRef,
    notificationsIconRef,
    router,
  }
}

export default useNavigationLoggedIn
