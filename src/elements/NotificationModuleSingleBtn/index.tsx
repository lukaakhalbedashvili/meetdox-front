import React, { FC } from 'react'
import Link from 'next/link'
import { getTimeAgo } from '@/utils/services/time'

interface NotificationModuleSingleBtnProps {
  url: string
  id: number
  text: string
  msTime: number
}

const NotificationModuleSingleBtn: FC<NotificationModuleSingleBtnProps> = ({
  url,
  id,
  text,
  msTime,
}) => {
  return (
    <Link href={url} key={id}>
      <div className="flex flex-col py-2 px-4 border-b-[1px] bg-white border-border_gray border-solid relative hover:bg-gray ">
        <div className="flex items-center justify-between">
          <p className="text-sm w-80 text-text_gray line-clamp-3 mb-5">
            {text}
          </p>
        </div>
        <div className="flex items-center justify-between absolute bottom-1">
          <p className="text-xs text-lite mt-[2px]">{getTimeAgo(msTime)}</p>
        </div>
      </div>
    </Link>
  )
}

export default NotificationModuleSingleBtn
