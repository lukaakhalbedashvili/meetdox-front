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
  return (
    <button
      className={`flex w-56 items-center rounded-xl px-4 py-3 text-icon_gray ${
        isSelected ? 'bg-sky text-white' : 'text-gray'
      }`}
      onClick={onClick}
    >
      <Icon
        className="mr-2 h-5 w-5"
        color={`${isSelected ? 'white' : '#5F6D7E'}`}
      />
      {text}
    </button>
  )
}

export default DashboardSidebarButton
