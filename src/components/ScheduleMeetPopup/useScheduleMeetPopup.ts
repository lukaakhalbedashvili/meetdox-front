import { useState } from 'react'

const useScheduleMeetPopup = ({ pricePerHour }: { pricePerHour: number }) => {
  const [meetDay, setMeetDay] = useState(new Date())

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
  }
}

export default useScheduleMeetPopup
