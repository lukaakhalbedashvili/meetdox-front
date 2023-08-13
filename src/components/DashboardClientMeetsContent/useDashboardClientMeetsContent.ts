import { useEffect, useState } from 'react'
import { useFetchMyMeetings } from '@/reactQuery/getMyMeetings'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import { useUpdateMeet } from '@/reactQuery/useUpdateMeet'
import { isMeetTimeExpired } from '@/utils/services/time'
import {
  ScheduleStepStatus,
  ScheduleTypes,
} from '../Dashboard/dashboard.interface'

const useDashboardClientMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])

  const { data, refetch } = useFetchMyMeetings(ScheduleTypes.MEETINGS_AS_CLIENT)
  const { mutate } = useUpdateMeet()

  useEffect(() => {
    if (data) {
      const completed = data
        .filter((meet) =>
          meet.status === ScheduleStepStatus.PAID_BY_USER
            ? isMeetTimeExpired(meet.date, meet.time, meet.duration)
            : meet.status === ScheduleStepStatus.COMPLETED ||
              meet.status === ScheduleStepStatus.CANCELED_BY_TEACHER ||
              meet.status === ScheduleStepStatus.CANCELED_BY_USER
        )
        .map((meet) =>
          meet.status === ScheduleStepStatus.PAID_BY_USER &&
          isMeetTimeExpired(meet.date, meet.time, meet.duration)
            ? { ...meet, status: ScheduleStepStatus.COMPLETED }
            : meet
        )

      const current = data.filter(
        (meet: ScheduledMeetStructure) =>
          meet.status !== ScheduleStepStatus.COMPLETED &&
          !isMeetTimeExpired(meet.date, meet.time, meet.duration) &&
          meet.status !== ScheduleStepStatus.CANCELED_BY_TEACHER &&
          meet.status !== ScheduleStepStatus.CANCELED_BY_USER
      )
      setCompletedMeets(completed)
      setCurrentMeets(current)
    }
  }, [data])
  return {
    completedMeets,
    currentMeets,
    mutate,
    refetch,
  }
}

export default useDashboardClientMeetsContent
