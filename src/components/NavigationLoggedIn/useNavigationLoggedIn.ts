import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { doc, onSnapshot, collection } from 'firebase/firestore'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'
import { usersCol } from '@/utils/firebase/init'
import { NotificationStructure } from './navigationLoggedIn.interface'

interface UseNavigationLoggedInProps {
  uid: string
  notifications: NotificationStructure[]
}
const useNavigationLoggedIn = ({
  uid,
  notifications,
}: UseNavigationLoggedInProps) => {
  const [notificationsList, setNotificationsList] = useState(notifications)
  const [unreadNotificationsNum, setUnreadNotificationsNum] = useState(
    notifications.filter((notif) => !notif.read).length
  )
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

  const userDocRef = doc(usersCol, uid)
  const notificationColRef = collection(userDocRef, 'notifications')

  onSnapshot(notificationColRef, (snapshot) => {
    const notifs = snapshot.docs.map(
      (doc) => doc.data() as NotificationStructure
    )
    const unreadNotifs = notifs.filter((notif) => !notif.read)
    setNotificationsList(notifs)
    setUnreadNotificationsNum(unreadNotifs.length)
  })

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
    notificationsList,
    setNotificationsList,
    unreadNotificationsNum,
    setUnreadNotificationsNum,
  }
}

export default useNavigationLoggedIn
