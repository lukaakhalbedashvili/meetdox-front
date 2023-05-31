import React from 'react'
import { BsCalendarDate as CalendarIcon } from 'react-icons/bs'
import { BiTimeFive as TimeIcon, BiHistory } from 'react-icons/bi'
import Image from 'next/image'
import Button from '@/elements/Button'
import {
  convertToLocalTime,
  formatScheduledDate,
  getTimeAgo,
} from '@/utils/services/time'
import { scheduleSteps } from '@/data/scheduleSteps'
import useDashboardClientMeetsContent from './useDashboardClientMeetsContent'
import {
  ScheduleComponentStructureNames,
  ScheduleTypes,
} from '../Dashboard/dashboard.interface'

const DashboardClientMeetsContent = () => {
  const { completedMeets, currentMeets, mutate, refetch } =
    useDashboardClientMeetsContent()

  return (
    <div className="scheduled-meetings">
      {[currentMeets, completedMeets].map((meetings, index) => (
        <>
          <h1 className="title mb-4 text-xl font-medium">
            Your {index === 0 ? 'Current' : 'Completed'} Meetings
          </h1>

          <div className="lg: mb-8 rounded-md py-4 sm:bg-background_gray lg:px-8">
            {meetings.map((meeting) => (
              <div
                key={meeting.teacherImg}
                className="meeting-card mt-4 mb-4 rounded-md bg-sky bg-opacity-20 py-4 px-4 lg:px-8"
              >
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="mb-2 flex w-full justify-center overflow-hidden rounded-full sm:h-16 sm:w-16">
                    <Image
                      src={
                        meeting.teacherImg
                          ? meeting.teacherImg
                          : '/unknown_user.png'
                      }
                      alt="Google Logo"
                      width={64}
                      height={64}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-center space-x-2 sm:justify-start">
                      <h2 className="font-medium">{meeting.teacherUsername}</h2>
                    </div>

                    <div className="mt-1 flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4 text-icon_gray" />

                      <span className="text-sm text-icon_gray">
                        {formatScheduledDate(meeting.date, meeting.timeZone)}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center space-x-2">
                      <TimeIcon className="h-4 w-4 text-icon_gray" />

                      <span className="text-sm text-icon_gray">
                        {convertToLocalTime(meeting.time, meeting.timeZone)}
                        {/* {getTimeAgo(meeting.createdAt)} */}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center space-x-2">
                      <BiHistory className="h-4 w-4 text-icon_gray" />

                      <span className="text-sm text-icon_gray">
                        Scheduled {getTimeAgo(meeting.createdAt)}
                      </span>
                    </div>
                    <div className="mt-3 flex w-full items-center justify-center space-x-1 sm:justify-start">
                      <span className="w-1/3 rounded-xl bg-green_label bg-opacity-20 px-3 py-2 text-xs font-medium text-green_label">
                        {meeting.duration} min
                      </span>

                      <span className="w-1/3 rounded-xl bg-blue_label bg-opacity-20 px-3 py-2 text-xs font-medium text-blue_label">
                        ${(meeting.perHour / 60) * meeting.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mb-2 mt-2 flex-col rounded-xl bg-green_label bg-opacity-20 p-3 sm:mt-0 sm:mb-0 sm:ml-2 sm:flex sm:w-1/3">
                    <p className="text-xs font-medium text-green_label">
                      {meeting.comment}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between sm:ml-2 sm:w-1/3">
                    <span
                      className={`
                    ${
                      scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                        meeting.status
                      ][ScheduleComponentStructureNames.TITLE1] === ''
                        ? 'hidden'
                        : 'block'
                    } mb-2 w-full rounded-xl bg-blue_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-blue_label`}
                    >
                      {
                        scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                          meeting.status
                        ][ScheduleComponentStructureNames.TITLE1]
                      }
                    </span>

                    <span
                      className={`
                    ${
                      scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                        meeting.status
                      ][ScheduleComponentStructureNames.TITLE2] === ''
                        ? 'hidden'
                        : 'block'
                    } mb-2 w-full rounded-xl bg-orange_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-orange_label`}
                    >
                      {
                        scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                          meeting.status
                        ][ScheduleComponentStructureNames.TITLE2]
                      }
                    </span>

                    <div className="flex w-full justify-center sm:space-x-2">
                      <Button
                        onClickHandler={() =>
                          mutate(
                            {
                              newStatus:
                                scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                                  meeting.status
                                ][
                                  ScheduleComponentStructureNames
                                    .ON_BUTTON_RED_CLICK
                                ],
                              meetId: meeting.meetId,
                              teacherUid: meeting.teacherUid,
                              clientUid: meeting.clientUid,
                            },
                            {
                              onSuccess: () => {
                                refetch()
                              },
                              onError: () => {},
                            }
                          )
                        }
                        customTailwindClasses={` ${
                          scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                            meeting.status
                          ][ScheduleComponentStructureNames.BUTTON_RED] === ''
                            ? 'hidden'
                            : 'block'
                        } bg-error bg-opacity-20 border-border_gray w-1/2 `}
                      >
                        <div className="flex h-[35px] items-center justify-center">
                          <p
                            className={`flex items-center justify-center text-sm font-medium text-error`}
                          >
                            {
                              scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                                meeting.status
                              ][ScheduleComponentStructureNames.BUTTON_RED]
                            }
                          </p>
                        </div>
                      </Button>

                      <Button
                        onClickHandler={() =>
                          mutate(
                            {
                              newStatus:
                                scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                                  meeting.status
                                ][
                                  ScheduleComponentStructureNames
                                    .ON_BUTTON_GREEN_CLICK
                                ],
                              meetId: meeting.meetId,
                              teacherUid: meeting.teacherUid,
                              clientUid: meeting.clientUid,
                            },
                            {
                              onSuccess: () => {},
                              onError: () => {},
                            }
                          )
                        }
                        customTailwindClasses={` ${
                          scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                            meeting.status
                          ][ScheduleComponentStructureNames.BUTTON_GREEN] === ''
                            ? 'hidden'
                            : 'block'
                        } bg-success_border_green bg-opacity-20 border-border_gray w-1/2`}
                      >
                        <div className="flex h-[35px]  items-center justify-center">
                          <p
                            className={`flex items-center justify-center text-sm font-medium text-success_border_green`}
                          >
                            {
                              scheduleSteps[ScheduleTypes.MEETINGS_AS_CLIENT][
                                meeting.status
                              ][ScheduleComponentStructureNames.BUTTON_GREEN]
                            }
                          </p>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default DashboardClientMeetsContent
