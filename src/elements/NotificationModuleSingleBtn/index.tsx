import React, { FC } from 'react'
import Link from 'next/link'
import { getTimeAgo } from '@/utils/services/time'

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
  return (
    <Link href={url} key={id}>
      <div
        className={`${type} relative flex flex-col border-b-[1px] border-solid border-border_gray hover:bg-white ${
          isRead ? 'bg-white' : 'bg-gray'
        } py-2  px-4 `}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="mb-5 w-80 text-sm text-text_gray line-clamp-3">
            {text}
          </p>
        </div>
        <div className="absolute bottom-1 flex items-center justify-between">
          <p className="mt-[2px] text-xs text-lite">{getTimeAgo(msTime)}</p>
        </div>
      </div>
    </Link>
  )
}

export default NotificationModuleSingleBtn
