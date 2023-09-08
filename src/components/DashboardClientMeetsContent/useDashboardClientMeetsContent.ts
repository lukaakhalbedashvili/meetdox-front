import { useEffect, useState } from 'react'
import { useFetchMyMeetings } from '@/reactQuery/getMyMeetings'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import { useUpdateMeet } from '@/reactQuery/useUpdateMeet'
import {
  isItCompletedMeet,
  isItCurrentMeet,
  isItExpiredMeet,
  isItSuccCompletedMeet,
} from '@/utils/services/meetStatus'
import {
  ScheduleStepStatus,
  ScheduleTypes,
} from '../Dashboard/dashboard.interface'

const useDashboardClientMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])

  const [meetInfo, setMeetInfo] = useState({
    teacherUid: '',
    meetId: '',
    clientUid: '',
  })

  const [isRefundPopupOpen, setIsRefundPopupOpen] = useState(false)
  const [isRatePopupOpen, setIsRatePopupOpen] = useState(false)
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  const { data, refetch } = useFetchMyMeetings(ScheduleTypes.MEETINGS_AS_CLIENT)
  const { mutate } = useUpdateMeet()

  useEffect(() => {
    if (data) {
      const completed = data
        .map((meet) => {
          if (isItCompletedMeet(meet)) {
            if (isItSuccCompletedMeet(meet)) {
              return {
                ...meet,
                status: ScheduleStepStatus.COMPLETED,
              }
            } else if (isItExpiredMeet(meet)) {
              return {
                ...meet,
                status: ScheduleStepStatus.EXPIRED,
              }
            }
          }
          return meet
        })
        .filter((meet) => isItCompletedMeet(meet))

      const current = data.filter((meet) => {
        if (isItCurrentMeet(meet)) {
          return meet
        }
      })
      setCompletedMeets(completed)
      setCurrentMeets(current)
    }
  }, [data])
  return {
    completedMeets,
    currentMeets,
    mutate,
    refetch,
    isRefundPopupOpen,
    setIsRefundPopupOpen,
    isRatePopupOpen,
    setIsRatePopupOpen,
    meetInfo,
    setMeetInfo,
    isButtonLoading,
    setIsButtonLoading,
  }
}

export default useDashboardClientMeetsContent
