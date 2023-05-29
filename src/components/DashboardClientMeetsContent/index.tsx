import React from 'react'
import { BsCalendarDate as CalendarIcon } from 'react-icons/bs'
import { BiTimeFive as TimeIcon } from 'react-icons/bi'
import Image from 'next/image'
import Button from '@/elements/Button'

const DashboardClientMeetsContent = () => {
  const meetings = [
    {
      meetingId: '1asfaasf',
      comment: 'This is a comment',
      createdAt: Date.now(),
      date: '2021-10-10',
      duration: 30,
      status: 'scheduledByUser',
      clientUid: '1asfa124asf',
      teacherUid: '1asfaa1412sf',
      time: 18,
      timeZone: 4,
    },
  ]
  return (
    <div className="scheduled-meetings">
      <h1 className="title mb-4 text-xl font-medium">Your current meetings</h1>
      <div className="mb-8 rounded-md bg-background_gray p-8">
        {meetings.map((meeting) => (
          <div
            key={meeting.meetingId}
            className="meeting-card rounded-md bg-sky bg-opacity-20 px-8 py-4"
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="mb-2 flex w-full justify-center overflow-hidden rounded-full sm:h-16 sm:w-16">
                <Image
                  src="/google_logo.png"
                  alt="Google Logo"
                  width={64}
                  height={64}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center justify-center space-x-2 sm:justify-start">
                  <h2 className="font-medium">Username</h2>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-icon_gray" />
                  <span className="text-sm text-icon_gray">
                    Tue 14 March 2023 (UTC+4)
                  </span>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <TimeIcon className="h-4 w-4 text-icon_gray" />
                  <span className="text-sm text-icon_gray">
                    scheduled 1 hours ago
                  </span>
                </div>

                <div className="mt-3 flex w-full items-center justify-center space-x-2 sm:justify-start">
                  <span className="w-1/3 rounded-xl bg-green_label bg-opacity-20 px-3 py-2 text-xs font-medium text-green_label">
                    30 min
                  </span>
                  <span className="w-1/3 rounded-xl bg-blue_label bg-opacity-20 px-3 py-2 text-xs font-medium text-blue_label">
                    $50
                  </span>
                  <span className="w-1/3 rounded-xl bg-orange_label bg-opacity-20 px-3 py-2 text-xs font-medium text-orange_label">
                    kide
                  </span>
                </div>
              </div>
              <div className="mb-2 mt-2 flex-col rounded-xl bg-green_label bg-opacity-20 p-3 sm:mt-0 sm:mb-0 sm:ml-2 sm:flex sm:w-1/3">
                <p className="text-xs font-medium text-green_label">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex flex-col justify-between sm:ml-2 sm:w-1/3">
                <span className="mb-2 w-full rounded-xl bg-blue_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-blue_label">
                  You have scheduled this meeting
                </span>
                <span className="mb-2 w-full rounded-xl bg-orange_label bg-opacity-20 px-3 py-2 text-center text-sm font-medium text-orange_label">
                  Waiting teacher for confirmation...
                </span>

                <div className="flex w-full justify-center sm:space-x-2">
                  <Button customTailwindClasses="bg-error bg-opacity-20 border-border_gray w-1/2 ">
                    <div
                      className="flex h-[35px] items-center justify-center"
                      onClick={() => console.log('clicked')}
                    >
                      <p className="flex items-center justify-center text-sm font-medium text-error">
                        Cancel
                      </p>
                    </div>
                  </Button>
                  <Button customTailwindClasses="bg-success_border_green bg-opacity-20 border-border_gray w-1/2">
                    <div
                      className="flex h-[35px]  items-center justify-center"
                      onClick={() => console.log('clicked')}
                    >
                      <p className="flex items-center justify-center text-sm font-medium text-success_border_green">
                        Approve
                      </p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {meetings.length === 0 && (
          <p className="no-meetings">No meetings scheduled.</p>
        )}
      </div>
    </div>
  )
}

export default DashboardClientMeetsContent
