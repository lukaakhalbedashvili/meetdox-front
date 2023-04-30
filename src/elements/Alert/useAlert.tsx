import { BsInfoLg } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import { CiWarning } from 'react-icons/ci'
import { BiErrorCircle } from 'react-icons/bi'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'

const useNotifications = () => {
  const { alert, setAlert } = useZustandStore((state) => state)

  const { type, message, onClick } = alert!

  const onClose = () => {
    setAlert(undefined)
  }

  const notificationInfo = {
    [AlertType.SUCCESS]: {
      icon: <MdDone className="h-5 w-5 fill-success_border_green" />,
      backGroundColor: 'bg-success_body_green',
      borderColor: 'border-success_border_green',
    },
    [AlertType.INFO]: {
      icon: <BsInfoLg className="h-5 w-5 fill-info_icon_blue" />,
      backGroundColor: 'bg-info_notification_bg',
      borderColor: 'border-info_notification_border',
    },
    [AlertType.WARNING]: {
      icon: <CiWarning className="h-5 w-5 fill-warning_icon_yellow" />,
      backGroundColor: 'bg-warning_bg_yellow',
      borderColor: 'border-warning_border_yellow',
    },
    [AlertType.ERROR]: {
      icon: <BiErrorCircle className="h-5 w-5 fill-error_icon_red" />,
      backGroundColor: 'bg-error_bg_red',
      borderColor: 'border-error_border_red',
    },
  }

  const selectedNotificationIcon = notificationInfo[type].icon
  const selectedNotificationBG = notificationInfo[type].backGroundColor
  const selectedNotificationBorder = notificationInfo[type].borderColor

  return {
    selectedNotificationIcon,
    selectedNotificationBG,
    message,
    selectedNotificationBorder,
    onClick,
    onClose,
  }
}

export default useNotifications
