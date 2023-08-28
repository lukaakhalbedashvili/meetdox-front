import React, { FC } from 'react'
import './scheduledTeacherMeet.css'
import Calendar from 'react-calendar'
import { IoIosClose } from 'react-icons/io'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import { AlertType } from '@/zustand/zustand.interface'
import TextArea from '@/elements/Textarea'
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
  teacherUid: string
}

const ScheduleMeetPopup: FC<ScheduleMeetPopupProps> = ({
  domain,
  image,
  name,
  lastName,
  pricePerHour,
  setIsModalOpen,
  teacherUid,
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
    offset,
    mutate,
    router,
    description,
    setDescription,
    setAlert,
    isPending,
    unavailableTimeSlots,
  } = useScheduleMeetPopup({ pricePerHour, teacherUid })

  return (
    <>
      {isPending && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {!isPending && (
        <div className="h-full overflow-scroll bg-white pt-4 lg:relative lg:flex lg:h-[700px] lg:w-fit lg:overflow-hidden lg:rounded-md lg:p-10">
          <IoIosClose
            className="absolute right-2 top-2 h-10 w-10 cursor-pointer fill-black lg:right-0 lg:top-0 lg:h-8 lg:w-8"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="flex flex-col">
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

            <div className="mx-4 h-96 max-h-56 py-4 lg:mx-0 lg:max-h-80">
              <TextArea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="describe what are your reason to meet"
              />
            </div>
          </div>

          <div className="mx-4 mt-4 flex flex-col lg:mx-10 lg:mt-0">
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

          <div className="mx-4 lg:relative lg:w-fit lg:overflow-hidden">
            <h2 className="mb-3 mt-6 text-base lg:mt-0 lg:text-base">
              {meetDayInWords}, {meetDay} {meetMonth}
            </h2>

            {meetTimeRange && unavailableTimeSlots.data && (
              <ScheduleMeetTimeSlots
                meetTimeRange={meetTimeRange}
                setMeetTimeRange={setMeetTimeRange}
              />
            )}

            <div className="my-4 flex h-12 justify-end sm:px-12 lg:absolute lg:bottom-2 lg:right-0 lg:px-0">
              <Button
                type="button"
                customTailwindClasses="bg-sky border-sky text-white"
                onClickHandler={(e) => {
                  const chosenTime = meetTimeRange?.find(
                    (time) => time.isChosen
                  )?.value

                  if (
                    selectedMeetDuration &&
                    chosenTime &&
                    offset &&
                    chosenTime
                  ) {
                    mutate(
                      {
                        duration: selectedMeetDuration,
                        date: `${meetDay}-${
                          meetDate.getMonth() + 1
                        }-${meetDate.getFullYear()}`,
                        time: chosenTime,
                        timeZone: offset,
                        teacherUid: teacherUid,
                        comment: description,
                      },
                      {
                        onSuccess: () => {
                          router.push(`/dashboard`)

                          setAlert({
                            message: 'scheduled successfully',
                            type: AlertType.SUCCESS,
                            onClick: () => {},
                            duration: 3000,
                          })
                        },
                      }
                    )
                  }
                  e.preventDefault()
                }}
              >
                <p className="flex h-10 w-36 items-center justify-center text-sm">
                  Save
                </p>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ScheduleMeetPopup
