import React, { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import NotificationModuleSingleBtn from '@/elements/NotificationModuleSingleBtn'
import useNavigationLoggedIn from '@/components/NavigationLoggedIn/useNavigationLoggedIn'
import { NotificationStructure } from '@/components/NavigationLoggedIn/navigationLoggedIn.interface'

interface MobileNotificationsProps {
  onClose: () => void
  uid: string
  notifications: NotificationStructure[]
}
const MobileNotifications: FC<MobileNotificationsProps> = ({
  onClose,
  uid,
  notifications,
}) => {
  const { notificationsList, unreadNotificationsNum } = useNavigationLoggedIn({
    uid,
    notifications,
  })

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-start border-b-[1px] border-border_gray pb-4">
        <IoIosArrowForward
          className="ml-3 mt-4 mr-2 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />

        <div className="mt-4">
          <p className="ml-5 text-lg ">
            Notifications ({unreadNotificationsNum})
          </p>
        </div>
      </div>

      <div className=" overflow-y-scroll bg-empty_gray">
        {notificationsList.map((notification) => (
          <NotificationModuleSingleBtn
            id={notification.id}
            key={notification.id}
            text={notification.body}
            title={notification.title}
            isRead={notification.read}
            type={notification.type}
            msTime={notification.createdAt}
            url={notification.url}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileNotifications
