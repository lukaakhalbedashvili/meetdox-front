import React, { FC } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillDollarCircle } from 'react-icons/ai'
import Image from 'next/image'

interface ScheduleTeacherPersonalInfoProps {
  image: string
  selectedMeetDuration: number
  lastName: string
  name: string
  domain: string
  totalPrice: number
}

const ScheduleTeacherPersonalInfo: FC<ScheduleTeacherPersonalInfoProps> = ({
  image,
  lastName,
  name,
  selectedMeetDuration,
  domain,
  totalPrice,
}) => {
  return (
    <div className="relative mx-4  border-b-[1px] border-border_gray pb-4 lg:mx-0 lg:mr-10 lg:border-none">
      <div className="mt-4 flex items-center lg:mt-0">
        <div className="relative flex h-16 w-16 rounded-full">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="ml-4 text-lg lg:text-base">
          {name} {lastName}
        </h2>
      </div>

      <div className="mt-4">
        <h2 className="text-xl text-sky lg:text-lg">
          consultation with {domain}
        </h2>

        <div className="mt-6 flex items-center">
          <AiFillClockCircle className="h-6 w-6 fill-text_gray" />

          <p className="ml-2 lg:text-sm">{selectedMeetDuration} mins</p>
        </div>

        <div className="mt-6 flex items-center">
          <AiFillDollarCircle className="h-6 w-6 fill-text_gray" />

          <p className="ml-2 lg:text-sm">${totalPrice}.0</p>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTeacherPersonalInfo
