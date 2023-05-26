import { useMutation } from 'react-query'
import { sendScheduleMeetApiReq } from '@/utils/api/sendScheduleMeetApiReq'

export const useSendScheduleMeet = () => {
  return useMutation({
    mutationFn: async (payload: {
      duration: number
      date: string
      time: number
      timeZone: number | string
      teacherUid: string
    }) => {
      await sendScheduleMeetApiReq(payload)
    },
  })
}
