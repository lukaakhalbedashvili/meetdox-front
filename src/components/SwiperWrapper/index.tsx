'use client'
import React, { FC, useRef, useState } from 'react'
import { Swiper } from 'swiper/react'
import SwiperCore from 'swiper'
import { IoIosArrowRoundForward } from 'react-icons/io'

interface LandingCategorySwiperProps {
  children: React.ReactNode
  title: string
}

const LandingCategorySwiper: FC<LandingCategorySwiperProps> = ({
  children,
  title,
}) => {
  const slideRightArrowRef = useRef(null)
  const slideLeftArrowRef = useRef(null)
  const [swiper, setSwiper] = useState<SwiperCore>()

  return (
    <div className="px-2 sm:px-12">
      <h2 className="text-2xl">{title}</h2>

      <div className="flex items-center">
        <div
          ref={slideLeftArrowRef}
          className="absolute left-0 z-10 flex cursor-pointer items-center justify-center rounded-full bg-white shadow-md sm:left-7"
          onClick={() => swiper?.slidePrev()}
        >
          <IoIosArrowRoundForward
            size={30}
            className="m-3 rotate-180 fill-sky"
          />
        </div>

        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          speed={1000}
          slidesPerView="auto"
          slidesPerGroup={1}
          breakpoints={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            640: {
              slidesPerGroup: 2,
            },
          }}
        >
          {children}
        </Swiper>

        <div
          ref={slideRightArrowRef}
          onClick={() => swiper?.slideNext()}
          className="absolute right-0 z-10 flex cursor-pointer items-center justify-center rounded-full bg-white shadow-md sm:right-6"
        >
          <IoIosArrowRoundForward
            size={30}
            className="m-3 transform fill-sky"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingCategorySwiper
