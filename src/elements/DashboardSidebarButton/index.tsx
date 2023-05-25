import React from 'react'
import { IconType } from 'react-icons'

interface DashboardSidebarButtonProps {
  Icon: IconType
  text: string
  isSelected: boolean
  onClick: () => void
}

const DashboardSidebarButton: React.FC<DashboardSidebarButtonProps> = ({
  Icon,
  text,
  isSelected,
  onClick,
}) => {
  const buttonClasses = `flex items-center px-4 py-3 w-56 text-icon_gray rounded-xl ${
    isSelected ? 'bg-sky text-black text-white' : 'text-gray'
  }`

  return (
    <button className={buttonClasses} onClick={onClick}>
      <Icon
        className="mr-2 h-5 w-5"
        color={`${isSelected ? 'white' : '#5F6D7E'}`}
      />
      {text}
    </button>
  )
}

export default DashboardSidebarButton
