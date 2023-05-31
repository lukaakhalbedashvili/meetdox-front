import { useEffect, useState } from 'react'
import { useFetchMyMeetings } from '@/reactQuery/getMyMeetings'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import {
  ScheduleStepStatus,
  ScheduleTypes,
} from '../Dashboard/dashboard.interface'

const useDashboardClientMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])

  const { data } = useFetchMyMeetings(ScheduleTypes.MEETINGS_AS_CLIENT)

  useEffect(() => {
    if (data) {
      const completed = data.filter(
        (meet: ScheduledMeetStructure) =>
          meet.status === ScheduleStepStatus.COMPLETED
      )
      const current = data.filter(
        (meet: ScheduledMeetStructure) =>
          meet.status !== ScheduleStepStatus.COMPLETED
      )
      setCompletedMeets(completed)
      setCurrentMeets(current)
    }
  }, [data])
  return {
    completedMeets,
    currentMeets,
  }
}

export default useDashboardClientMeetsContent
