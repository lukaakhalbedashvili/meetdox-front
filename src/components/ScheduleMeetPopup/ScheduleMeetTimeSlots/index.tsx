import React, { Dispatch, FC, SetStateAction } from 'react'
import SchedulerTimeSlot from '@/elements/SchedulerTimeSlot'
import { TimeRange } from '../useScheduleMeetPopup'

interface ScheduleMeetTimeSlotsProps {
  meetTimeRange: TimeRange[]
  setMeetTimeRange: Dispatch<SetStateAction<TimeRange[] | undefined>>
}

const ScheduleMeetTimeSlots: FC<ScheduleMeetTimeSlotsProps> = ({
  meetTimeRange,
  setMeetTimeRange,
}) => {
  return (
    <div className="mb-6 flex flex-wrap justify-between lg:grid lg:max-h-[500px]  lg:grid-cols-2 lg:flex-nowrap lg:gap-2 lg:overflow-scroll">
      {meetTimeRange &&
        meetTimeRange.map((item) => {
          return (
            <SchedulerTimeSlot
              onClickHandler={(time) =>
                setMeetTimeRange(
                  meetTimeRange.map((item) => {
                    return {
                      ...item,
                      isChosen: item.value === time,
                    }
                  })
                )
              }
              key={item.value}
              time={item.value}
              isChosen={item.isChosen}
            />
          )
        })}
    </div>
  )
}

export default ScheduleMeetTimeSlots
