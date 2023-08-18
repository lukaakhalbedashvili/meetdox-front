import { IconType } from 'react-icons'
import { BiUser, BiMessageError } from 'react-icons/bi'
import { IoAddOutline } from 'react-icons/io5'

interface ProfileModuleItem {
  id: number
  text: string
  url: string
  Icon: IconType
}

export const profileBtnsSectionOne: ProfileModuleItem[] = [
  {
    id: 1,
    text: 'Dashboard',
    url: '/dashboard',
    Icon: BiUser,
  },
  {
    id: 3,
    text: 'Become expert',
    url: '/become-expert',
    Icon: IoAddOutline,
  },
]

export const profileBtnsSectionTwo: ProfileModuleItem[] = [
  {
    id: 5,
    text: 'Send Feedback',
    url: '/feedback',
    Icon: BiMessageError,
  },
]
