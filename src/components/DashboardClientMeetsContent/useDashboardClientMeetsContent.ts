import { useEffect, useState } from 'react'
import { useFetchMyMeetings } from '@/reactQuery/getMyMeetings'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'

const useDashboardClientMeetsContent = () => {
  const [completedMeets, setCompletedMeets] = useState<
    ScheduledMeetStructure[]
  >([])
  const [currentMeets, setCurrentMeets] = useState<ScheduledMeetStructure[]>([])

  const { data } = useFetchMyMeetings('meetingsAsClient')

  useEffect(() => {
    if (data) {
      const completed = data.filter(
        (meet: ScheduledMeetStructure) => meet.status === 'completed'
      )
      const current = data.filter(
        (meet: ScheduledMeetStructure) => meet.status !== 'completed'
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
