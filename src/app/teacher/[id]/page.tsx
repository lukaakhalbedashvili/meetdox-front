'use client'
import Image from 'next/image'
import { BsFillStarFill } from 'react-icons/bs'
import { teachersDummyData } from '@/data/teachersDummyData'
import Button from '@/elements/Button'

const page = () => {
  const { image, name, lastName, rating, totalReviews, title } =
    teachersDummyData[0]
  return (
    <div className="px:4 mx-2 sm:px-10 sm:pt-10">
      <div className="mt-2 flex border-b-[1px] border-border_gray px-3 py-8">
        <div className="relative h-24 w-24 max-w-[300px] rounded-full sm:h-40 sm:w-60">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-fill"
          />
        </div>

        <div className="ml-6 flex flex-col justify-around">
          <h2 className="font-semi-bold text-2xl">
            {name} {lastName}
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BsFillStarFill className="fill-star_gold" />

              <p className="mx-1">{rating}</p>

              <p className="text-icon_gray">{`(${totalReviews})`}</p>
            </div>

            <Button
              type="button"
              customTailwindClasses="bg-sky border-sky text-white"
              onClickHandler={(e) => {
                console.log('clicked', e)
              }}
            >
              <p className="flex h-8 w-24 items-center justify-center text-sm">
                Call
              </p>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 px-2">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default page
