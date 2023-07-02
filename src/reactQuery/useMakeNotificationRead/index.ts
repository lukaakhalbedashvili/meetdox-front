import { useMutation } from '@tanstack/react-query'
import { makeNotificationRead } from '@/utils/api/makeNotificationRead'

export const useMakeNotificationRead = () => {
  return useMutation({
    mutationFn: async (payload: { notificationId: string }) => {
      makeNotificationRead({
        notificationId: payload.notificationId,
      })
        .then(() => {})
        .catch(() => {})
    },
  })
}
