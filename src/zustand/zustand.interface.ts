import { User } from 'firebase/auth'

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
  setAlert: (alert: AlertStructure | undefined) => void
  loggedInUser: User | undefined
  setLoggedInUser: (loggedInUser: User) => void
}
