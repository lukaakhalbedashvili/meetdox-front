import { UserFromUserData } from '@/reactQuery/getUserData/getUserData.interface'

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface AlertStructure {
  message: string
  type: AlertType
  onClick: () => void
  duration: number
}

export interface BearState {
  alert: AlertStructure | undefined
  isLogInPopupOpen: boolean
  setAlert: (alert: AlertStructure | undefined) => void
  setIsLogInPopupOpen: (isPopupOpen: boolean) => void
  loggedInUser: UserFromUserData | undefined
  setLoggedInUser: (user: UserFromUserData | undefined) => void
}
