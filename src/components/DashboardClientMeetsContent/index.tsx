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
import PopupItemWrapper from '../PopupItemWrapper'
import RateTeacherPopup from '../RateTeacherPopup'
import RefundTeacherPopup from '../RefundTeacherPopup'

const DashboardClientMeetsContent = () => {
  const {
    completedMeets,
    currentMeets,
    mutate,
    refetch,
    isRatePopupOpen,
    isRefundPopupOpen,
    setIsRatePopupOpen,
    setIsRefundPopupOpen,
    meetInfo,
    setMeetInfo,
  } = useDashboardClientMeetsContent()

  return (
    <div className="flex min-h-screen flex-col justify-between">
      {[currentMeets, completedMeets].map((meetings, index) => (
        <div key={index}>
          <h1 className="title mb-4 text-xl font-medium">
            Your {index === 0 ? 'Current' : 'Completed'} Meetings
          </h1>

          <div className="lg: mb-8 rounded-md py-4 sm:bg-background_gray lg:px-8">
            {meetings.map((meeting) => {
              const currMeet = scheduleSteps.meetingsAsClient[meeting.status]
              return (
                <div
                  key={meeting.meetId}
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
                        <h2 className="font-medium">
                          {meeting.teacherUsername}
                        </h2>
                      </div>

                      <div className="mt-1 flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-icon_gray" />

                        <span className="text-sm text-icon_gray">
                          {formatScheduledDate(
                            meeting.date,
                            meeting.time,
                            meeting.timeZone
                          )}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center space-x-2">
                        <TimeIcon className="h-4 w-4 text-icon_gray" />

                        <span className="text-sm text-icon_gray">
                          {convertToLocalTime(
                            meeting.date,
                            meeting.time,
                            meeting.timeZone
                          )}
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
                      {currMeet.title1 && (
                        <span className="mb-2 w-full rounded-xl bg-blue_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-blue_label">
                          {currMeet.title1}
                        </span>
                      )}

                      {currMeet.title2 && (
                        <span className="mb-2 w-full rounded-xl bg-orange_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-orange_label">
                          {currMeet.title2}
                        </span>
                      )}

                      <div className="flex w-full justify-center sm:space-x-2">
                        {currMeet.buttonRed && (
                          <Button
                            onClickHandler={() => {
                              if (
                                typeof currMeet.onButtonRedClick === 'string'
                              ) {
                                mutate(
                                  {
                                    newStatus: currMeet.onButtonRedClick,
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
                              } else {
                                if (currMeet.buttonGreen === 'Refund') {
                                  setIsRefundPopupOpen(true)
                                  setMeetInfo({
                                    teacherUid: meeting.teacherUid,
                                    meetId: meeting.meetId,
                                    clientUid: meeting.clientUid,
                                  })
                                } else {
                                  currMeet.onButtonRedClick(meeting)
                                }
                              }
                            }}
                            customTailwindClasses="bg-error bg-opacity-20 border-border_gray w-1/2"
                          >
                            <div className="flex h-[35px] items-center justify-center">
                              <p className="flex items-center justify-center text-sm font-medium text-error">
                                {currMeet.buttonRed}
                              </p>
                            </div>
                          </Button>
                        )}

                        {currMeet.buttonGreen && (
                          <Button
                            onClickHandler={() => {
                              if (
                                typeof currMeet.onButtonGreenClick === 'string'
                              ) {
                                mutate(
                                  {
                                    newStatus: currMeet.onButtonGreenClick,
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
                              } else {
                                if (currMeet.buttonGreen === 'Rate') {
                                  setIsRatePopupOpen(true)
                                  setMeetInfo({
                                    teacherUid: meeting.teacherUid,
                                    meetId: meeting.meetId,
                                    clientUid: meeting.clientUid,
                                  })
                                } else {
                                  currMeet.onButtonGreenClick(meeting)
                                }
                              }
                            }}
                            customTailwindClasses="bg-success_border_green bg-opacity-20 border-border_gray w-1/2"
                          >
                            <div className="flex h-[35px]  items-center justify-center">
                              <p
                                className={`flex items-center justify-center text-sm font-medium text-success_border_green`}
                              >
                                {currMeet.buttonGreen}
                              </p>
                            </div>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {isRatePopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsRatePopupOpen(false)}
        >
          <RateTeacherPopup
            onClose={() => setIsRatePopupOpen(false)}
            meetInfo={meetInfo}
          />
        </PopupItemWrapper>
      )}

      {isRefundPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsRefundPopupOpen(false)}
        >
          <RefundTeacherPopup
            onClose={() => setIsRefundPopupOpen(false)}
            meetInfo={meetInfo}
          />
        </PopupItemWrapper>
      )}
    </div>
  )
}

export default DashboardClientMeetsContent
