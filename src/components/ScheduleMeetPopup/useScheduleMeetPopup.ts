import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { get24Hours, getRemainingTimeSlots } from '@/utils/services/time'
import { timeZones } from '@/data/timeZones'
import { days, monthNames } from '@/utils/consts/consts'
import { meetDurationsObject } from '@/data/teachersDummyData'
import { useSendScheduleMeet } from '@/reactQuery/useSendScheduleMeet'
import { useZustandStore } from '@/zustand'

export interface TimeRange {
  value: number
  isChosen: boolean
}

const useScheduleMeetPopup = ({ pricePerHour }: { pricePerHour: number }) => {
  const { setAlert } = useZustandStore()

  const router = useRouter()

  const { mutate, isPending } = useSendScheduleMeet()

  const [description, setDescription] = useState('')

  const [meetDate, setMeetDate] = useState(new Date())

  const [selectedTimeOffset, setSelectedTimeOffset] =
    useState('(UTC-01:00) Azores')
  useEffect(() => {
    setSelectedTimeOffset(
      timeZones.find(
        (item) => item.offset === (meetDate.getTimezoneOffset() / -60 || 4)
      )?.text!
    )
  }, [])

  useEffect(() => {
    setMeetDate(getRemainingTimeSlots(selectedTimeOffset))
  }, [selectedTimeOffset])

  const offset = timeZones.find((item) => item.text === selectedTimeOffset)
    ?.offset!

  const [meetTimeRange, setMeetTimeRange] = useState<TimeRange[]>()

  useEffect(() => {
    if (!meetDate) return

    setMeetTimeRange(get24Hours(meetDate))
  }, [meetDate, selectedTimeOffset])

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
    description,
    setDescription,
    setAlert,
    isPending,
  }
}

export default useScheduleMeetPopup
