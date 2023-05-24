import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import { timeZones } from '@/data/timeZones'

interface ScheduleMeetTimeZonesProps {
  selectedTimeOffset: string
  setSelectedTimeOffset: Dispatch<SetStateAction<string>>
}

const ScheduleMeetTimeZones: FC<ScheduleMeetTimeZonesProps> = ({
  selectedTimeOffset,
  setSelectedTimeOffset,
}) => {
  return (
    <div>
      <h2 className="mb-3 mt-6 text-base lg:text-base">Time Zone</h2>

      <div className="h-10 lg:text-sm">
        <DropDownInput
          value={selectedTimeOffset}
          name="time zones"
          options={timeZones.map((item) => item.text)}
          onChange={(value) => {
            const textToSet = timeZones.find(
              (item) => item.text === value.target.value
            )?.text

            textToSet && setSelectedTimeOffset(textToSet)
          }}
        />
      </div>
    </div>
  )
}

export default ScheduleMeetTimeZones
