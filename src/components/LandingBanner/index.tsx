import React, { FC, MutableRefObject } from 'react'
import { useRouter } from 'next/navigation'
import useLandingBanner from './useLandingBanner'

interface LandingBannerProps {
  itemsRef: MutableRefObject<null | HTMLDivElement>
}

const LandingBanner: FC<LandingBannerProps> = ({ itemsRef }) => {
  const { setIsSignupPopupOpen } = useLandingBanner()
  const router = useRouter()

  return (
    <div className="relative flex h-80 items-center  justify-center overflow-hidden  sm:h-72">
      <div className="absolute h-full w-[150%]  rounded-b-[50%]  bg-gray sm:w-[110%]"></div>

      <div className="z-10 flex w-full flex-col items-center justify-center">
        <h1 className="mt-5 text-center text-xl font-medium text-sky sm:text-3xl">
          Schedule Your Virtual Mentor Meet
        </h1>

        <p className="mt-2 px-5 text-center text-sm font-thin text-text_gray sm:mt-5 sm:text-lg ">
          Connect with expert mentors. Schedule personalized online meetings for
          career, skills, and insights.
        </p>

        <div className="mt-8 flex   flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-start">
          <button
            className="mb-4 w-64 rounded-full bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:mr-2"
            onClick={() => {
              setIsSignupPopupOpen(true)
              router.push('?redirect-to=become-mentor')
            }}
          >
            GET STARTED AS MENTOR
          </button>

          <button
            className="w-64 rounded-full  bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:ml-2"
            onClick={() => {
              if (itemsRef?.current) {
                itemsRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
            }}
          >
            SCHEDULE MEET WITH MENTOR
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingBanner
