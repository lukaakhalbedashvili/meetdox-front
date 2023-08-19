import { IconType } from 'react-icons'
import { BiUser, BiMessageError } from 'react-icons/bi'
import { MdOutlineContactPage } from 'react-icons/md'
import { IoAddOutline } from 'react-icons/io5'

interface ProfileModuleItem {
  id: number
  text: string
  url: string
  Icon: IconType
}

export const profileBtnsSectionOne = (isExpert: boolean, uid: string) => {
  return [
    {
      id: 1,
      text: 'Dashboard',
      url: '/dashboard',
      Icon: BiUser,
    },
    {
      id: 3,
      text: isExpert ? 'Expert page' : 'Become expert',
      url: isExpert ? `/expert/${uid}` : '/become-expert',
      Icon: isExpert ? MdOutlineContactPage : IoAddOutline,
    },
  ]
}

export const profileBtnsSectionTwo: ProfileModuleItem[] = [
  {
    id: 5,
    text: 'Send Feedback',
    url: '/feedback',
    Icon: BiMessageError,
  },
]
