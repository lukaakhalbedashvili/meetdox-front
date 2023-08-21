import { useMutation } from '@tanstack/react-query'
import { ScheduleStepStatus } from '@/components/Dashboard/dashboard.interface'
import { updateMeet } from '@/utils/api/updateMeet'

export const useUpdateMeet = () => {
  return useMutation({
    mutationFn: async (payload: {
      clientUid: string
      teacherUid: string
      meetId: string
      newStatus: ScheduleStepStatus | string
      refundComment?: string
      reviewComment?: string
      reviewRate?: number
    }) => {
      await updateMeet(payload)
    },
  })
}
