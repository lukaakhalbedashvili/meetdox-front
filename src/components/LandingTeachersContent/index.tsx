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
  const {
    data,
    isLoading,
    categoriesSwiperSectionRef,
    loggedInUser,
    isLoggedInUserLoading,
  } = useLandingTeachersContent()

  return (
    <div className="">
      {(isLoading || isLoggedInUserLoading) && (
        <div className="flex h-screen items-center justify-center">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {!loggedInUser.data && !isLoggedInUserLoading && (
        <LandingBanner itemsRef={categoriesSwiperSectionRef} />
      )}

      {!isLoading && !isLoggedInUserLoading && (
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
                    <Link href={`expert/${categoryTeachers.uid}`}>
                      <TeacherPublicPreview
                        onClickHandler={() => {}}
                        key={categoryTeachers.uid}
                        totalReviews={categoryTeachers.reviews.length}
                        image={categoryTeachers.image}
                        lastName={categoryTeachers.personalDetails.lastName}
                        name={categoryTeachers.personalDetails.name}
                        title={categoryTeachers.description}
                        tags={categoryTeachers.skills}
                        rate={categoryTeachers.rate}
                        perHour={categoryTeachers.perHour}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </SwiperWrapper>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LandingTeachersContent
