import Image from 'next/image'
import React, { FC } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillDollarCircle } from 'react-icons/ai'
import './test.css'
import Calendar from 'react-calendar'
import Checkbox from '@/elements/Checkbox'
import SchedulerTimeSlot from '@/elements/SchedulerTimeSlot'
import 'react-calendar/dist/Calendar.css'
import Button from '@/elements/Button'
import DropDownInput from '@/elements/DropDownInput'
import { timeZones } from '@/data/timeZones'
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
    meetDate,
    setMeetDate,
    minData,
    maxDate,
    meetTimeRange,
    setMeetTimeRange,
    meetMonth,
    meetDay,
    meetDayInWords,
    selectedTimeZone,
    setSelectedTimeZone,
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
            value={meetDate}
            onChange={(value) => value && setMeetDate(value as Date)}
            prev2Label={null}
            next2Label={null}
            minDate={minData}
            maxDate={maxDate}
          />

          <h2 className="mb-3 mt-6 text-base">
            {meetDayInWords},{meetDay} {meetMonth}
          </h2>

          <div className="mb-6 flex flex-wrap justify-between">
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

          <h2 className="mb-3 mt-6 text-base">Time Zone</h2>

          <div className="h-10">
            <DropDownInput
              value={selectedTimeZone}
              name="time zones"
              options={timeZones.map((item) => item.text)}
              onChange={(value) => setSelectedTimeZone(value.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="my-4 flex h-12 justify-end pr-4 sm:px-12">
        <Button
          type="button"
          customTailwindClasses="bg-sky border-sky text-white"
          onClickHandler={(e) => {
            e.preventDefault()
          }}
        >
          <p className="flex h-[36px] w-32 items-center justify-center text-sm">
            Save
          </p>
        </Button>
      </div>
    </div>
  )
}

export default ScheduleMeetPopup
