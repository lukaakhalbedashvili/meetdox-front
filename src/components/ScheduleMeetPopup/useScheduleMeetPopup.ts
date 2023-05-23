import { useEffect, useState } from 'react'
import { get24Hours } from '@/utils/services/time'

interface Range {
  value: number
  isChosen: boolean
}

const useScheduleMeetPopup = ({ pricePerHour }: { pricePerHour: number }) => {
  const [meetDate, setMeetDate] = useState(new Date())

  const [meetTimeRange, setMeetTimeRange] = useState<Range[]>()

  useEffect(() => {
    setMeetTimeRange(get24Hours(meetDate))
  }, [meetDate])

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const maxDate = new Date()

  maxDate.setMonth(maxDate.getMonth() + 1)

  const minData = new Date()

  const meetMonth = monthNames[meetDate.getMonth()]

  const meetDay = meetDate.getDate()

  const meetDayInWords = days[meetDate.getDay()]

  const meetDurationsObject = [
    {
      value: 15,
      isChecked: false,
    },
    {
      value: 30,
      isChecked: true,
    },
    {
      value: 45,
      isChecked: false,
    },
  ]

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
  }
}

export default useScheduleMeetPopup
