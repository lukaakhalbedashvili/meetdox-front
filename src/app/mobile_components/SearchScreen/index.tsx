import React, { FC } from 'react'
// back icon
import { IoIosArrowForward } from 'react-icons/Io'
import NavigationSearchBar from '@/components/NavigationSearchBar'

interface ResetPasswordStageProps {
  onClose: () => void
}
const SearchScreen: FC<ResetPasswordStageProps> = ({ onClose }) => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <IoIosArrowForward
          className="ml-3 mt-3 mr-2 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
        <div className="mt-3">
          <NavigationSearchBar />
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
