import React, { FC } from 'react'

interface SchedulerTimeSlotProps {
  time: number
  isChosen?: boolean
  onClickHandler?: (time: number) => void
}

const SchedulerTimeSlot: FC<SchedulerTimeSlotProps> = ({
  time,
  isChosen,
  onClickHandler,
}) => {
  const timeToDisplay = time < 10 ? `0${time}:00` : `${time}:00`
  return (
    <div
      onClick={() => onClickHandler && onClickHandler(time)}
      className={`mt-2 flex h-14 w-2/5 cursor-pointer items-center justify-center rounded-md border-[1px] border-border_gray lg:mt-0 lg:h-12 lg:w-36 lg:text-sm ${
        isChosen ? 'bg-sky text-white' : 'bg-white'
      }`}
    >
      {timeToDisplay}
    </div>
  )
}

export default SchedulerTimeSlot
