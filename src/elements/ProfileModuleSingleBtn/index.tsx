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
      className="px-4 pt-2 pb-2 flex items-start hover:bg-gray cursor-pointer"
      onClick={onClick}
    >
      {children}
      <p className="text-sm ml-3">{text}</p>
    </div>
  )
}

export default ProfileModuleSingleBtn
