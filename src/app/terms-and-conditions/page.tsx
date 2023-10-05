'use client'
import React from 'react'
import HeadData from '@/components/HeadData'

const Page = () => {
  return (
    <div>
      <HeadData
        title="Meetdox - Terms and Conditions"
        desc="Explore Meetdox, your personal expertise hub connecting you with verified experts. Schedule one-on-one online consultations and gain valuable insights on various topics. Elevate your skills and knowledge with our diverse community of mentors. Join us to learn, grow, and achieve your goals!"
      />
      <iframe
        src={`https://docs.google.com/document/d/e/2PACX-1vT30zqHwovOGpu_bmIIO_L5sY7CVYBddfPI8knACxVX4mYPmt5O9k7XlXaL1yKsh-8-g868qLn-9Fhd/pub?embedded=true`}
        title="PDF Viewer"
        style={{ width: '100%', height: '800px', border: 'none' }}
      />
    </div>
  )
}

export default Page
