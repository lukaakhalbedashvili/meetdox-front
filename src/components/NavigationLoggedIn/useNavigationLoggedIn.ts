import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'
import { NotificationStructure } from './navigationLoggedIn.interface'

const useNavigationLoggedIn = () => {
  const router = useRouter()
  const profileDropdownRef = useRef<HTMLDivElement>(null)
  const notificationsDropDownRef = useRef<HTMLDivElement>(null)
  const userAvatarRef = useRef<HTMLButtonElement>(null)
  const notificationsIconRef = useRef<HTMLButtonElement>(null)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [notifications, setNotifications] = useState<NotificationStructure[]>(
    []
  )

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
    notifications,
    setNotifications,
    profileDropdownRef,
    userAvatarRef,
    notificationsDropDownRef,
    notificationsIconRef,
    router,
  }
}

export default useNavigationLoggedIn
