import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { doc, onSnapshot, collection } from 'firebase/firestore'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'
import { useZustandStore } from '@/zustand'
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

  useEffect(() => {
    const userDocRef = doc(usersCol, uid)
    const notificationColRef = collection(userDocRef, 'notifications')

    const unsubscribe = onSnapshot(notificationColRef, (snapshot) => {
      const notifs = snapshot.docs.map(
        (doc) => doc.data() as NotificationStructure
      )
      const unreadNotifs = notifs.filter(
        (notif: NotificationStructure) => !notif.read
      )

      setNotificationsList(
        notifs.sort((a: NotificationStructure, b: NotificationStructure) => {
          if (a.read && !b.read) {
            return 1 // 'a' is read, 'b' is unread, so 'a' should come after 'b'
          } else if (!a.read && b.read) {
            return -1 // 'a' is unread, 'b' is read, so 'a' should come before 'b'
          } else {
            return b.createdAt - a.createdAt // Sort by 'createdAt' in descending order
          }
        })
      )
      setUnreadNotificationsNum(unreadNotifs.length)
    })

    return () => unsubscribe()
  }, [])

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

  const setLoggedInUser = useZustandStore((state) => state.setLoggedInUser)

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
    setLoggedInUser,
  }
}

export default useNavigationLoggedIn
