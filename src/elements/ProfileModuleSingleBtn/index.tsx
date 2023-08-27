import React, { FC } from 'react'

interface ProfileModuleSingleBtnProps {
  text: string
  children?: React.ReactNode
  onClick?: () => void
}

const ProfileModuleSingleBtn: FC<ProfileModuleSingleBtnProps> = ({
  onClick,
  text,
  children,
}) => {
  return (
    <div
      className="flex cursor-pointer items-start px-4 pb-2 pt-2 hover:bg-gray"
      onClick={onClick}
    >
      {children}
      <p className="ml-3 text-sm">{text}</p>
    </div>
  )
}

export default ProfileModuleSingleBtn
