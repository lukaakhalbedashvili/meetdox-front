'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { ClipLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useLandingTeachersContent from './useLandingTeachersContent'
import SwiperWrapper from '../SwiperWrapper'
import { TeacherData } from '../Catalog/catalog.interface'
import LandingBaner from '../LandingBaner'

const LandingTeachersContent = () => {
  const router = useRouter()

  const { data, isLoading } = useLandingTeachersContent()
  return (
    <div className="min-h-screen ">
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
          <ClipLoader color="#36d7b7" />
        </div>
      )}
      <div className="relative flex h-96 w-full items-center justify-center">
        <span className="relative top-0 z-10 -mt-36 bg-gray pt-4  sm:pt-0 ">
          <LandingBaner />
        </span>
        <Image
          src="/arc-div.svg"
          className="absolute mt-16 h-full w-full sm:mt-0"
          objectFit="cover"
          fill
          alt="cont"
        />
      </div>

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
                    Object.keys(categoryTeachers.skills)[0],
                    Object.keys(categoryTeachers.skills)[1],
                  ]}
                />
              </SwiperSlide>
            ))}
          </SwiperWrapper>
        )
      })}
    </div>
  )
}

export default LandingTeachersContent
