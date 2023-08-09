import React from 'react'
import LandingTeachersContent from '@/components/LandingTeachersContent'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className="mt-[50px] flex h-full flex-col bg-white font-ubuntu sm:mt-[90px]">
      <LandingTeachersContent />

      <Footer />
    </main>
  )
}

export default Home
