export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface NotificationStructure {
  message: string
  type: NotificationType
  onClick: () => void
}

export interface BearState {
  notification: NotificationStructure | undefined
  setNotifications: (payload: NotificationStructure | undefined) => void
}
