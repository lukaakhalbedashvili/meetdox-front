import React from 'react'

const LandingBaner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="px-4 text-center text-3xl font-medium text-sky">
        Schedule your meet
      </h1>
      <p className="mt-2 px-4 text-center text-base font-thin text-text_gray">
        Find your perfect teacher today and start learning
      </p>
      <div className="mt-8 flex w-full flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-start">
        <button className="mb-4 w-64 rounded-full bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:mr-2">
          GET STARTED AS TALENT
        </button>
        <button className="w-64 rounded-full  bg-text_gray py-4 px-8 text-xs font-medium text-white hover:bg-sky sm:ml-2">
          SCHEDULE MEET WITH TALENT
        </button>
      </div>
    </div>
  )
}

export default LandingBaner
