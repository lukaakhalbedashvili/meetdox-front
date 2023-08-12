'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { ClipLoader } from 'react-spinners'
import Image from 'next/image'
import Link from 'next/link'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useLandingTeachersContent from './useLandingTeachersContent'
import SwiperWrapper from '../SwiperWrapper'
import { TeacherData } from '../Catalog/catalog.interface'
import LandingBanner from '../LandingBanner'

const LandingTeachersContent = () => {
  const { data, isLoading, itemsRef } = useLandingTeachersContent()

  return (
    <div className="">
      <div className="relative flex h-96 w-full items-center justify-center">
        <span className="relative top-0 z-10 -mt-36 w-full bg-gray  pt-4 sm:pt-0">
          <LandingBanner itemsRef={itemsRef} />
        </span>

        <Image
          src="/arc-div.svg"
          className="absolute mt-16 h-full w-full object-cover sm:mt-0"
          fill
          alt="cont"
        />
      </div>

      {isLoading && (
        <div className=" flex h-screen justify-center">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      <div ref={itemsRef} className="pt-20">
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
