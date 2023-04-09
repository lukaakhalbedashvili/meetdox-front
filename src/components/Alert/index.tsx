import { IoCloseOutline } from 'react-icons/io5'
import useNotifications from './useAlert'

const Notification = () => {
  const {
    message,
    onClick,
    onClose,
    selectedNotificationBG,
    selectedNotificationBorder,
    selectedNotificationIcon,
  } = useNotifications()!

  return (
    <div
      className={`rounded ${selectedNotificationBG} ${selectedNotificationBorder} border-2 p-6 flex items-center cursor-pointer justify-between `}
      onClick={onClick}
    >
      <div className="flex items-center">
        {selectedNotificationIcon}

        <p className="text-base ml-5 mr-5">{message}</p>
      </div>

      <IoCloseOutline className="w-5 h-5" color="gray" onClick={onClose} />
    </div>
  )
}

export default Notification
