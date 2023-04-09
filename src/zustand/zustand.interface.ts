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
  setAlert: (payload: AlertStructure | undefined) => void
}
