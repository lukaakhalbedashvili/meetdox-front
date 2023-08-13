import React from 'react'

const LandingBanner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mt-5 text-center text-xl font-medium text-sky sm:text-3xl">
        Schedule Your Virtual Mentor Meet
      </h1>

      <p className="mt-2 px-5 text-center text-sm font-thin text-text_gray sm:mt-5 sm:text-lg ">
        Connect with expert mentors. Schedule personalized online meetings for
        career, skills, and insights.
      </p>
      <div className="mt-5 flex flex-col   items-center justify-center sm:mt-8 sm:flex-row sm:items-start sm:justify-start">
        <button className="mb-4 w-64 rounded-full bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:mr-2">
          GET STARTED AS MENTOR
        </button>

        <button className="w-64 rounded-full  bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:ml-2">
          SCHEDULE MEET WITH MENTOR
        </button>
      </div>
    </div>
  )
}

export default LandingBanner
