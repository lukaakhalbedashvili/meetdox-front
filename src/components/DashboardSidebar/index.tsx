import React from 'react'
import { FiChevronDown as ChevronDownIcon } from 'react-icons/fi'
import dashboardItems from '@/data/dashboardItems'
import DashboardSidebarButton from '@/elements/DashboardSidebarButton'
import useDashboardSidebar from './useDashboardSidebar'

const DashboardSidebar: React.FC = () => {
  const {
    selectedButton,
    handleDashboardItemChange,
    isDropdownOpen,
    toggleDropdown,
    ActiveIcon,
  } = useDashboardSidebar()

  return (
    <div className="flex h-full flex-col sm:w-72 sm:flex-col">
      <div className="w-full space-y-4 sm:hidden">
        <button
          className={`flex w-full items-center justify-center space-x-32 rounded-xl bg-sky px-4 py-2 text-white`}
          onClick={toggleDropdown}
        >
          <span className="flex w-3/4">
            <ActiveIcon className="mr-2 mt-[2px] h-5 w-5" color={`white`} />
            <span>{selectedButton}</span>
          </span>
          <ChevronDownIcon
            className={`relative right-0 h-7 w-7 ${
              isDropdownOpen ? 'rotate-180 transform' : ''
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="flex-col justify-center rounded-xl border border-border_gray bg-white py-4 px-4">
            {dashboardItems.map((item) => (
              <DashboardSidebarButton
                key={item.id}
                Icon={item.icon}
                text={item.title}
                isSelected={selectedButton === item.title}
                onClick={() => handleDashboardItemChange(item.title)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="hidden flex-col justify-between pr-4 sm:flex">
        {dashboardItems.map((item) => (
          <DashboardSidebarButton
            key={item.id}
            Icon={item.icon}
            text={item.title}
            isSelected={selectedButton === item.title}
            onClick={() => handleDashboardItemChange(item.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebar
