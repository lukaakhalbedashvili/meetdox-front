import { useState } from 'react'

const useScheduleMeetPopup = ({ pricePerHour }: { pricePerHour: number }) => {
  // const monthNames = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ]

  const [meetDay, setMeetDay] = useState(new Date())

  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 1)

  const minData = new Date()

  // const meetMonth = monthNames[meetDay.getMonth()]

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
    meetDay,
    setMeetDay,
    minData,
    maxDate,
  }
}

export default useScheduleMeetPopup
