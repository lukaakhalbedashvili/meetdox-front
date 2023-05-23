import Image from 'next/image'
import React, { FC } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillDollarCircle } from 'react-icons/ai'
import './test.css'
import Calendar from 'react-calendar'
import Checkbox from '@/elements/Checkbox'
import 'react-calendar/dist/Calendar.css'
import useScheduleMeetPopup from './useScheduleMeetPopup'

interface ScheduleMeetPopupProps {
  domain: string
  image: string
  name: string
  lastName: string
  pricePerHour: number
}

const ScheduleMeetPopup: FC<ScheduleMeetPopupProps> = ({
  domain,
  image,
  name,
  lastName,
  pricePerHour,
}) => {
  const {
    meetDurations,
    setMeetDuration,
    selectedMeetDuration,
    totalPrice,
    meetDay,
    setMeetDay,
    minData,
    maxDate,
  } = useScheduleMeetPopup({ pricePerHour })

  return (
    <div className="h-full overflow-scroll bg-white pt-4">
      <div className="mx-4 border-b-[1px] border-border_gray pb-4">
        <div className="mt-4 flex items-center">
          <div className="relative flex h-16 w-16 rounded-full">
            <Image
              src={image}
              fill
              alt="profile image"
              className="rounded-full object-cover"
            />
          </div>

          <h2 className="ml-4 text-lg">
            {name} {lastName}
          </h2>
        </div>

        <div className="mt-4">
          <h2 className="text-xl text-sky">consultation with {domain}</h2>

          <div className="mt-6 flex items-center">
            <AiFillClockCircle className="h-6 w-6 fill-text_gray" />

            <p className="ml-2">{selectedMeetDuration} mins</p>
          </div>

          <div className="mt-6 flex items-center">
            <AiFillDollarCircle className="h-6 w-6 fill-text_gray" />

            <p className="ml-2">${totalPrice}.0</p>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 flex flex-col">
        <h2 className="mb-3 text-lg">Duration</h2>

        {meetDurations.map((item) => {
          return (
            <div key={item.value} className="mr-4 flex items-center">
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

              <p className="ml-3">{item.value} mins</p>
            </div>
          )
        })}

        <div>
          <h2 className="mb-4 mt-5 text-lg">Date & Time selection</h2>

          <Calendar
            tileClassName="border-none h-12 w-12 rounded-md text-icon_gray flex justify-center items-center"
            className="h-fit w-full rounded-md border-none"
            showNeighboringMonth={false}
            value={meetDay}
            onChange={(value) => value && setMeetDay(value as Date)}
            prev2Label={null}
            next2Label={null}
            minDate={minData}
            maxDate={maxDate}
          />
        </div>
      </div>
    </div>
  )
}

export default ScheduleMeetPopup
