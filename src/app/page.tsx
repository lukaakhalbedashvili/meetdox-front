import React from 'react'
import Script from 'next/script'
import LandingTeachersContent from '@/components/LandingTeachersContent'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className="relative  flex h-screen flex-col justify-between bg-white font-ubuntu">
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
