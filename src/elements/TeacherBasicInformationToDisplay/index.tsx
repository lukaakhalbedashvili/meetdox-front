import React, { FC } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Button from '../Button'

interface TeacherBasicInformationToDisplayProps {
  location: string
  rating: number
  totalReviews: number
}

const TeacherBasicInformationToDisplay: FC<
  TeacherBasicInformationToDisplayProps
> = ({ location, rating, totalReviews }) => {
  return (
    <div className="">
      <h2 className="text-xl font-medium">Basic Information</h2>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-base text-icon_gray">Location:</p>

          <h3 className="mt-1 text-lg">{location}</h3>
        </div>

        <div className="flex flex-col">
          <p className="text-base text-icon_gray">Rating:</p>

          <div className="flex">
            <h3 className="mr-1 text-base">{rating}</h3>

            <div className="flex items-center">
              <BsFillStarFill className="fill-star_gold" />

              <p className="mx-2 text-icon_gray">{`(${totalReviews})`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button
          type="button"
          customTailwindClasses="bg-sky border-sky text-white"
        >
          <p className="flex h-10 w-36 items-center justify-center text-base">
            Schedule a Call
          </p>
        </Button>
      </div>
    </div>
  )
}

export default TeacherBasicInformationToDisplay
