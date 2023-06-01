'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { ClipLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useLandingTeachersContent from './useLandingTeachersContent'
import SwiperWrapper from '../SwiperWrapper'
import { TeacherData } from '../Catalog/catalog.interface'

const LandingTeachersContent = () => {
  const router = useRouter()

  const { data, isLoading } = useLandingTeachersContent()

  return (
    <div className="min-h-screen">
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {data?.categorizedTeachers?.map((item) => (
        <SwiperWrapper key={item.header} title={item.header}>
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
                tags={[categoryTeachers.skills[0], categoryTeachers.skills[1]]}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      ))}
    </div>
  )
}

export default LandingTeachersContent
