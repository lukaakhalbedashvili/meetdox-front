import React, { FC } from 'react'
import Link from 'next/link'

interface ProfileModuleSingleBtnProps {
  url: string
  id: number
  text: string
  children?: React.ReactNode
}

const ProfileModuleSingleBtn: FC<ProfileModuleSingleBtnProps> = ({
  url,
  id,
  text,
  children,
}) => {
  return (
    <Link href={url} key={id}>
      <div className="px-4 pt-2 pb-2 flex items-start hover:bg-gray">
        {children}
        <p
          className="text-sm ml-3
    "
        >
          {text}
        </p>
      </div>
    </Link>
  )
}

export default ProfileModuleSingleBtn
