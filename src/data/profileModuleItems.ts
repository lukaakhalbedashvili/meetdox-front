import { IconType } from 'react-icons'
import { BiUser, BiHelpCircle, BiMessageError } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

interface ProfileModuleItem {
  id: number
  text: string
  url: string
  Icon: IconType
}

export const profileBtnsSectionOne: ProfileModuleItem[] = [
  {
    id: 1,
    text: 'Profile',
    url: '/profile',
    Icon: BiUser,
  },
  {
    id: 2,
    text: 'Settings',
    url: '/settings',
    Icon: FiSettings,
  },
]

export const profileBtnsSectionTwo: ProfileModuleItem[] = [
  {
    id: 2,
    text: 'Help & Support',
    url: '/help',
    Icon: BiHelpCircle,
  },
  {
    id: 3,
    text: 'Send Feedback',
    url: '/feedback',
    Icon: BiMessageError,
  },
]
