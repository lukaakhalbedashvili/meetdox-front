import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'

interface CashOutPopupProps {
  onClose: () => void
}

const CashOutPopup: FC<CashOutPopupProps> = ({ onClose }) => {
  return (
    <div className="h-screen bg-white px-6 py-2 sm:h-auto sm:w-[500px] sm:rounded-md">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Coming Soon!</h1>
      </div>

      <p className="mt-4 text-center text-xs text-text_gray">
        We are working hard to bring this feature to you soon. Stay tuned!
      </p>
      <p className="mb-12 mt-4 text-center text-xs text-text_gray">
        But if you would like cash out now, please contact us at
        admin@meetdox.com
      </p>
    </div>
  )
}

export default CashOutPopup
