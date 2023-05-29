import { useMutation } from '@tanstack/react-query'
import { sendScheduleMeetApiReq } from '@/utils/api/sendScheduleMeetApiReq'

export const useSendScheduleMeet = () => {
  return useMutation({
    mutationFn: async (payload: {
      duration: number
      date: string
      time: number
      timeZone: number
      teacherUid: string
      comment: string
    }) => {
      await sendScheduleMeetApiReq(payload)
    },
  })
}
