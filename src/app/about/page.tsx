import React from 'react'
import Image from 'next/image'
import { teamMembers } from '@/data/aboutUs'
import HeadData from '@/components/HeadData'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-8 sm:px-8">
      <HeadData
        title="Meetdox - About us"
        desc="Explore Meetdox, your personal expertise hub connecting you with verified experts. Schedule one-on-one online consultations and gain valuable insights on various topics. Elevate your skills and knowledge with our diverse community of mentors. Join us to learn, grow, and achieve your goals!"
      />
      <p className="mb-16  text-2xl font-light">Our team</p>

      <div className="flex flex-col items-center sm:flex-row">
        {teamMembers.map((item) => {
          return (
            <div
              key={item.name}
              className="mb-10 flex  w-full flex-col items-start justify-start sm:mb-0 sm:w-1/2 sm:flex-row"
            >
              <div className="relative h-52 w-full sm:w-52">
                <Image
                  src={item.image}
                  fill
                  alt="team member"
                  className="bg-sky object-cover"
                />
              </div>

              <div className="mt-5 sm:ml-5  sm:w-[60%]">
                <h3 className="m-0 text-xl">{item.name}</h3>

                <p className="text-sm text-sky">{item.title}</p>

                <p className="mt-4 w-full text-sm">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
