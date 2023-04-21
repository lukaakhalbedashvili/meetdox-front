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
      <div className="relative flex flex-col border-b-[1px] border-solid border-border_gray bg-white py-2 px-4 hover:bg-gray ">
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
