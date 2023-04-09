'use client'
import React, { useEffect, useState } from 'react'
import { teachersDummyData } from '@/data/teachersDummyData'
import TeacherPublicPreview from '@/components/TeacherPublicPreview'
import { auth } from '../utils/firebase/init'

const Home = () => {
  const [user, setUser] = useState<string>()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.email && setUser(user.email)
      } else {
        setUser('No user')
      }
    })
  }, [])

  return (
    <main className="bg-white h-[500px] font-ubuntu">
      {user}

      <div className="flex items-center">
        {teachersDummyData.map((item) => (
          <TeacherPublicPreview
            key={item.id}
            price={20}
            totalReviews={12}
            rating={4.5}
            image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
            lastName="Akhalbedashvili"
            name="Luka"
            title="I am a teacher, with 12 years of experience I am a teacher, with 12 years of experience"
          />
        ))}
      </div>
    </main>
  )
}

export default Home
