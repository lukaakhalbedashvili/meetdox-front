import React from 'react'
import HeadData from '@/components/HeadData'

const Page = () => {
  return (
    <div>
      <HeadData
        title="Meetdox - Privacy Policy"
        desc="Explore Meetdox, your personal expertise hub connecting you with verified experts. Schedule one-on-one online consultations and gain valuable insights on various topics. Elevate your skills and knowledge with our diverse community of mentors. Join us to learn, grow, and achieve your goals!"
      />
      <iframe
        src={`https://docs.google.com/document/d/e/2PACX-1vRYMXX5erT3rNYSVrsdEd1kUX6mm89aV8Su8A9pLig_Yu3vhX18vuyUf3JDvA7NgqHklspnrmvrU8Px/pub?embedded=true`}
        title="PDF Viewer"
        style={{ width: '100%', height: '800px', border: 'none' }}
      />
    </div>
  )
}

export default Page
