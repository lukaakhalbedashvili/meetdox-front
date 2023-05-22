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

  const { data, categoryList } = useLandingTeachersContent()

  return (
    <div className="">
      {categoryList.map((category) => (
        <SwiperWrapper key={category} title={category}>
          {data
            ? categoryList.map((category: string) => {
                const categoryTeachers = data[category] || []
                return (
                  <SwiperWrapper key={category} title={category}>
                    {categoryTeachers.map((item: TeacherData) => (
                      <SwiperSlide
                        key={item.uid}
                        style={{ width: 'fit-content' }}
                      >
                        <TeacherPublicPreview
                          onClickHandler={() =>
                            router.push(`teacher/${item.uid}`)
                          }
                          price={20}
                          key={item.uid}
                          totalReviews={12}
                          rating={4.5}
                          image={item.image}
                          lastName={item.personalDetails.lastName}
                          name={item.personalDetails.name}
                          title={item.description}
                          tags={[item.skills[0], item.skills[1]]}
                        />
                      </SwiperSlide>
                    ))}
                  </SwiperWrapper>
                )
              })
            : null}
        </SwiperWrapper>
      ))}
    </div>
  )
}

export default LandingTeachersContent
