import { useMutation } from '@tanstack/react-query'
import { sendFeedback } from '@/utils/api/sendFeedback'

export const useSendFeedback = () => {
  return useMutation({
    mutationFn: async (payload: { uid: string; feedback: string }) => {
      await sendFeedback({
        uid: payload.uid,
        feedback: payload.feedback,
      })
        .then(() => {})
        .catch(() => {})
    },
  })
}
