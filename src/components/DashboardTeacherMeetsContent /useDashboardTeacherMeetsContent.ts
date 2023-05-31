import { useEffect, useState } from 'react'
import { useFetchMyMeetings } from '@/reactQuery/getMyMeetings'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import { useUpdateMeet } from '@/reactQuery/useUpdateMeet'
import {
  ScheduleStepStatus,
  ScheduleTypes,
} from '../Dashboard/dashboard.interface'

const useDashboardTeacherMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])
  const { data, refetch } = useFetchMyMeetings(
    ScheduleTypes.MEETINGS_AS_TEACHER
  )

  const { mutate } = useUpdateMeet()

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
    mutate,
    refetch,
  }
}

export default useDashboardTeacherMeetsContent
