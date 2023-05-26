import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { get24Hours } from '@/utils/services/time'
import { timeZones } from '@/data/timeZones'
import { days, monthNames } from '@/utils/consts/consts'
import { meetDurationsObject } from '@/data/teachersDummyData'
import { useSendScheduleMeet } from '@/reactQuery/useSendScheduleMeet'

export interface TimeRange {
  value: number
  isChosen: boolean
}

const useScheduleMeetPopup = ({ pricePerHour }: { pricePerHour: number }) => {
  const router = useRouter()
  const { mutate } = useSendScheduleMeet()
  const [meetDate, setMeetDate] = useState(new Date())

  const [selectedTimeOffset, setSelectedTimeOffset] =
    useState('(UTC-01:00) Azores')

  const offset = meetDate.getTimezoneOffset() / -60 || 4

  useEffect(() => {
    setSelectedTimeOffset(
      timeZones.find((item) => item.offset === offset)?.text!
    )
  }, [offset])

  const [meetTimeRange, setMeetTimeRange] = useState<TimeRange[]>()

  useEffect(() => {
    setMeetTimeRange(get24Hours(meetDate))
  }, [meetDate])

  const maxDate = new Date()

  maxDate.setMonth(maxDate.getMonth() + 1)

  const minData = new Date()

  const meetMonth = monthNames[meetDate.getMonth()]

  const meetDay = meetDate.getDate()

  const meetDayInWords = days[meetDate.getDay()]

  const [meetDurations, setMeetDuration] = useState(meetDurationsObject)

  const selectedMeetDuration = meetDurations.find(
    (meetDuration) => meetDuration.isChecked
  )?.value

  const pricePerMinute = pricePerHour / 60

  const totalPrice = pricePerMinute * selectedMeetDuration!

  return {
    meetDurations,
    setMeetDuration,
    selectedMeetDuration,
    totalPrice,
    meetDate,
    setMeetDate,
    minData,
    maxDate,
    meetTimeRange,
    setMeetTimeRange,
    meetMonth,
    meetDay,
    meetDayInWords,
    selectedTimeOffset,
    setSelectedTimeOffset,
    offset,
    mutate,
    router,
  }
}

export default useScheduleMeetPopup
