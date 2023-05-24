import React, { FC } from 'react'
import './scheduledTeacherMeet.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { IoIosClose } from 'react-icons/io'
import useScheduleMeetPopup from './useScheduleMeetPopup'
import ScheduleTeacherPersonalInfo from './ScheduleTeacherPersonalInfo'
import ScheduleTeacherMeetDuration from './ScheduleTeacherMeetDuration'
import ScheduleMeetTimeSlots from './ScheduleMeetTimeSlots'
import ScheduleMeetTimeZones from './ScheduleMeetTimeZones'

interface ScheduleMeetPopupProps {
  domain: string
  image: string
  name: string
  lastName: string
  pricePerHour: number
  setIsModalOpen: (value: boolean) => void
}

const ScheduleMeetPopup: FC<ScheduleMeetPopupProps> = ({
  domain,
  image,
  name,
  lastName,
  pricePerHour,
  setIsModalOpen,
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
    setSelectedTimeOffset,
    selectedTimeOffset,
  } = useScheduleMeetPopup({ pricePerHour })

  return (
    <div className="h-full overflow-scroll bg-white pt-4 lg:relative lg:mt-6 lg:flex lg:h-[700px] lg:w-[1200px] lg:overflow-hidden lg:rounded-md lg:p-10">
      <IoIosClose
        className="absolute top-2 right-2 h-10 w-10 cursor-pointer fill-black lg:top-0 lg:right-0 lg:h-8 lg:w-8"
        onClick={() => setIsModalOpen(false)}
      />

      {selectedMeetDuration && (
        <ScheduleTeacherPersonalInfo
          domain={domain}
          image={image}
          lastName={lastName}
          name={name}
          selectedMeetDuration={selectedMeetDuration}
          totalPrice={totalPrice}
        />
      )}

      <div className="mx-4 mt-4 flex flex-col lg:mt-0">
        <ScheduleTeacherMeetDuration
          meetDurations={meetDurations}
          setMeetDuration={setMeetDuration}
        />

        <div>
          <h2 className="mb-4 mt-5 text-lg lg:text-base">
            Date & Time selection
          </h2>

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

          <ScheduleMeetTimeZones
            selectedTimeOffset={selectedTimeOffset}
            setSelectedTimeOffset={setSelectedTimeOffset}
          />
        </div>
      </div>

      <div className="mx-4 lg:w-fit">
        <h2 className="mb-3 mt-6 text-base lg:mt-0 lg:text-base">
          {meetDayInWords},{meetDay} {meetMonth}
        </h2>

        {meetTimeRange && (
          <ScheduleMeetTimeSlots
            meetTimeRange={meetTimeRange}
            setMeetTimeRange={setMeetTimeRange}
          />
        )}
      </div>
    </div>
  )
}

export default ScheduleMeetPopup
