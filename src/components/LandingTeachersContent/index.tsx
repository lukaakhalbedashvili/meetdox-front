'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/navigation'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useLandingTeachersContent from './useLandingTeachersContent'
import SwiperWrapper from '../SwiperWrapper'
import { TeacherData } from '../Catalog/catalog.interface'

const LandingTeachersContent = () => {
  const router = useRouter()

  const { data } = useLandingTeachersContent()

  return (
    <div className="">
      {data?.categorizedTeachers?.map((item) => (
        <SwiperWrapper key={item.header} title={item.header}>
          <SwiperWrapper title={item.header}>
            {item.categoryItems.map((categoryTeachers: TeacherData) => (
              <SwiperSlide
                key={categoryTeachers.uid}
                style={{ width: 'fit-content' }}
              >
                <TeacherPublicPreview
                  onClickHandler={() =>
                    router.push(`teacher/${categoryTeachers.uid}`)
                  }
                  price={20}
                  key={categoryTeachers.uid}
                  totalReviews={12}
                  rating={4.5}
                  image={categoryTeachers.image}
                  lastName={categoryTeachers.personalDetails.lastName}
                  name={categoryTeachers.personalDetails.name}
                  title={categoryTeachers.description}
                  tags={[
                    categoryTeachers.skills[0],
                    categoryTeachers.skills[1],
                  ]}
                />
              </SwiperSlide>
            ))}
          </SwiperWrapper>
        </SwiperWrapper>
      ))}
    </div>
  )
}

export default LandingTeachersContent