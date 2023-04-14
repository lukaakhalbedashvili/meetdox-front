'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import LandingCategorySwiper from '@/components/SwiperWrapper'
import { teachersDummyData } from '@/data/teachersDummyData'
import TeacherPublicPreview from '@/components/TeacherPublicPreview'

const Home = () => {
  return (
    <main className="bg-white h-[500px] font-ubuntu">
      <LandingCategorySwiper categoryName="Doctors">
        {teachersDummyData.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 'fit-content' }}>
            <TeacherPublicPreview
              price={20}
              totalReviews={12}
              rating={4.5}
              image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
              lastName="Akhalbedashvili"
              name="Luka"
              title="I am a teacher, with 12 years of experience I am a teacher, with 12 years of experience"
            />
          </SwiperSlide>
        ))}
      </LandingCategorySwiper>
    </main>
  )
}

export default Home
