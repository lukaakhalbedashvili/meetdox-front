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
      className={`rounded ${selectedNotificationBG} ${selectedNotificationBorder} flex  cursor-pointer  items-center justify-between border-2 p-3 `}
      onClick={onClick}
    >
      <div className="flex items-center">
        {selectedNotificationIcon}

        <p className="ml-5 mr-5 text-base">{message}</p>
      </div>

      <IoCloseOutline className="h-5 w-5" color="gray" onClick={onClose} />
    </div>
  )
}

export default Notification
