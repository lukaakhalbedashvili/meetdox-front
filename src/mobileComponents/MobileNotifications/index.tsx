import React, { FC, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import NotificationModuleSingleBtn from '@/elements/NotificationModuleSingleBtn'
import { NotificationStructure } from '@/components/NavigationLoggedIn/navigationLoggedIn.interface'

interface MobileNotificationsProps {
  onClose: () => void
}
const MobileNotifications: FC<MobileNotificationsProps> = ({ onClose }) => {
  const [notifications] = useState<NotificationStructure[]>([])

  return (
    <div className="w-full">
      <div className="flex items-center justify-start border-b-[1px] border-border_gray pb-4">
        <IoIosArrowForward
          className="ml-3 mt-4 mr-2 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />

        <div className="mt-4">
          <p className="ml-5 text-lg ">Notifications (0)</p>
        </div>
      </div>

      <div className="flex max-h-80 flex-col overflow-y-scroll bg-empty_gray">
        {notifications.map((notification) => (
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
