import React from 'react'
import LandingTeachersContent from '@/components/LandingTeachersContent'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className="relative  flex h-screen flex-col justify-between bg-white font-ubuntu">
      <LandingTeachersContent />

      <Footer />
    </main>
  )
}

export default Home
