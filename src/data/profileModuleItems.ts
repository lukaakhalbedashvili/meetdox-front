import { IconType } from 'react-icons'
import { BiUser, BiMessageError } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
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
      text: isExpert ? 'Expert Profile' : 'Become expert',
      url: isExpert ? `/expert/${uid}` : '/become-expert',
      Icon: isExpert ? MdOutlineContactPage : IoAddOutline,
    },
    {
      id: 4,
      text: 'Cash Out',
      url: '/cash-out',
      Icon: AiOutlineDollarCircle,
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
