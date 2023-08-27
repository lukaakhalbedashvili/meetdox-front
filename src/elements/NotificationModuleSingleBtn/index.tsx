import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { getTimeAgo } from '@/utils/services/time'
import { useMakeNotificationRead } from '@/reactQuery/useMakeNotificationRead'

interface NotificationModuleSingleBtnProps {
  url: string
  id: string
  text: string
  title: string
  type: string
  msTime: number
  isRead: boolean
}

const NotificationModuleSingleBtn: FC<NotificationModuleSingleBtnProps> = ({
  url,
  id,
  text,
  msTime,
  isRead,
  title,
  type,
}) => {
  const { mutate } = useMakeNotificationRead()
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(url)
        mutate(
          {
            notificationId: id,
          },
          {
            onSuccess: () => {},
            onError: () => {},
          }
        )
      }}
      key={id}
      className={`${type} relative
      flex cursor-pointer flex-col border-b-[1px] border-solid border-border_gray hover:bg-white ${
        isRead ? 'bg-white' : 'bg-gray'
      } px-4  py-2 `}
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="flex items-center justify-between">
        <p className="mb-5 line-clamp-3 w-80 text-sm text-text_gray">{text}</p>
      </div>
      <div className="absolute bottom-1 flex items-center justify-between">
        <p className="mt-[2px] text-xs text-lite">{getTimeAgo(msTime)}</p>
      </div>
    </div>
  )
}

export default NotificationModuleSingleBtn
