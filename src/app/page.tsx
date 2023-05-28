import React from 'react'
import CategoryNav from '@/components/CategoryNav'
import LandingTeachersContent from '@/components/LandingTeachersContent'

const Home = () => {
  return (
    <main className="bg-white font-ubuntu">
      <CategoryNav />

      <LandingTeachersContent />
    </main>
  )
}

export default Home
