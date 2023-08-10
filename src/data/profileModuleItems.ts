import { IconType } from 'react-icons'
import { BiUser, BiHelpCircle, BiMessageError } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
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
    id: 2,
    text: 'Settings',
    url: '/settings',
    Icon: FiSettings,
  },
  {
    id: 3,
    text: 'Become mentor',
    url: '/become-mentor',
    Icon: IoAddOutline,
  },
]

export const profileBtnsSectionTwo: ProfileModuleItem[] = [
  {
    id: 4,
    text: 'Help & Support',
    url: '/help',
    Icon: BiHelpCircle,
  },
  {
    id: 5,
    text: 'Send Feedback',
    url: '/feedback',
    Icon: BiMessageError,
  },
]
