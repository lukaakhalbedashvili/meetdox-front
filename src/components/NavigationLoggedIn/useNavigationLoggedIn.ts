import { useRef, useState } from 'react'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '@/utils/firebase/init'
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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.reload()
      })
      .catch(() => {
        // ALERT
      })
  }

  return {
    handleNotificationsClick,
    handleProfileClick,
    handleLogout,
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
