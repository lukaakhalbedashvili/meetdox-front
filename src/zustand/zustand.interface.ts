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
}

export interface BearState {
  alert: AlertStructure | undefined
  setAlert: (payload: AlertStructure | undefined) => void
}
