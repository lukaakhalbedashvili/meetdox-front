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
  loggedInUser: UserData | undefined
  setLoggedInUser: (loggedInUser: UserData) => void
}

export interface UserData {
  email: string
  username: string
  photoURL: string
  uid: string
}
