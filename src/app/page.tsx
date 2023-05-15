'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/navigation'
import SwiperWrapper from '@/components/SwiperWrapper'
import { teachersDummyData } from '@/data/teachersDummyData'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import CategoryNav from '@/components/CategoryNav'

const Home = () => {
  const router = useRouter()

  return (
    <main className="bg-white font-ubuntu">
      <CategoryNav />

      <SwiperWrapper title="Doctors">
        {teachersDummyData.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 'fit-content' }}>
            <TeacherPublicPreview
              onClickHandler={() => router.push(`teacher/${item.id}`)}
              price={20}
              totalReviews={12}
              rating={4.5}
              image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
              lastName="Akhalbedashvili"
              name="Luka"
              title="I am a teacher, with 12 years of experience I am a teacher, with 12 years of experience"
              tags={['Math', 'Physics', 'Chemistry']}
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </main>
  )
}

export default Home
