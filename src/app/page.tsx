import React from 'react'
import Script from 'next/script'
import LandingTeachersContent from '@/components/LandingTeachersContent'
import Footer from '@/components/Footer'
import HeadData from '@/components/HeadData'

const Home = () => {
  return (
    <main className="relative  flex h-screen flex-col justify-between bg-white font-ubuntu">
      <HeadData
        title="Meetdox - Schedule a meeting with an expert"
        desc="Explore Meetdox, your personal expertise hub connecting you with verified experts. Schedule one-on-one online consultations and gain valuable insights on various topics. Elevate your skills and knowledge with our diverse community of mentors. Join us to learn, grow, and achieve your goals!"
      />
      <LandingTeachersContent />
      <Footer />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VFNVWVQN5G" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VFNVWVQN5G');
        `}
      </Script>
    </main>
  )
}

export default Home
