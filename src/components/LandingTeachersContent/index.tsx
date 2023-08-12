'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useLandingTeachersContent from './useLandingTeachersContent'
import SwiperWrapper from '../SwiperWrapper'
import { TeacherData } from '../Catalog/catalog.interface'
import LandingBanner from '../LandingBanner'

const LandingTeachersContent = () => {
  const { data, isLoading, categoriesSwiperSectionRef } =
    useLandingTeachersContent()

  return (
    <div className="">
      <LandingBanner itemsRef={categoriesSwiperSectionRef} />

      {isLoading && (
        <div className=" mt-32 flex h-screen justify-center">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      <div ref={categoriesSwiperSectionRef} className="pt-20">
        {data?.categorizedTeachers?.map((item) => {
          if (item.categoryItems.length === 0) {
            return null
          }
          return (
            <SwiperWrapper
              key={item.header}
              title={`Schedule your meet with ${item.header.toLowerCase()}s`}
            >
              {item.categoryItems.map((categoryTeachers: TeacherData) => (
                <SwiperSlide
                  key={categoryTeachers.uid}
                  style={{ width: 'fit-content' }}
                >
                  <Link href={`teacher/${categoryTeachers.uid}`}>
                    <TeacherPublicPreview
                      onClickHandler={() => {}}
                      price={20}
                      key={categoryTeachers.uid}
                      totalReviews={12}
                      rating={4.5}
                      image={categoryTeachers.image}
                      lastName={categoryTeachers.personalDetails.lastName}
                      name={categoryTeachers.personalDetails.name}
                      title={categoryTeachers.description}
                      tags={[
                        Object.keys(categoryTeachers.skills)[0],
                        Object.keys(categoryTeachers.skills)[1],
                      ]}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </SwiperWrapper>
          )
        })}
      </div>
    </div>
  )
}

export default LandingTeachersContent
