import React, { Dispatch, FC, SetStateAction } from 'react'
import Checkbox from '@/elements/Checkbox'

interface ScheduleTeacherMeetDurationProps {
  meetDurations: { value: number; isChecked: boolean; text: string }[]
  setMeetDuration: Dispatch<
    SetStateAction<
      {
        value: number
        text: string
        isChecked: boolean
      }[]
    >
  >
}

const ScheduleTeacherMeetDuration: FC<ScheduleTeacherMeetDurationProps> = ({
  meetDurations,
  setMeetDuration,
}) => {
  return (
    <div>
      <h2 className="mb-3 text-lg lg:text-base">Duration</h2>

      <div className="lg:flex lg:items-center">
        {meetDurations.map((item) => {
          return (
            <div key={item.value} className="mr-4 flex items-center lg:mr-8">
              <Checkbox
                isChecked={item.isChecked}
                id={item.value}
                onChange={(value) =>
                  setMeetDuration(
                    meetDurations.map((item) => {
                      return {
                        ...item,
                        isChecked: item.value === value,
                      }
                    })
                  )
                }
              />

              <p className="ml-3 lg:text-sm">{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScheduleTeacherMeetDuration
