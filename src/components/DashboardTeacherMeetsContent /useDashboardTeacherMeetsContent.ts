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

const useDashboardTeacherMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])
  const [loadingMeet, setLoadingMeet] = useState('')
  const { data, refetch } = useFetchMyMeetings(
    ScheduleTypes.MEETINGS_AS_TEACHER
  )

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
      setLoadingMeet('')
    }
  }, [data])
  return {
    completedMeets,
    currentMeets,
    mutate,
    refetch,
    loadingMeet,
    setLoadingMeet,
  }
}

export default useDashboardTeacherMeetsContent
