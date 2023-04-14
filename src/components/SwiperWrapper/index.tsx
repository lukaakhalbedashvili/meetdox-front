'use client'
import React, { FC, useRef, useState } from 'react'
import { Swiper } from 'swiper/react'
import SwiperCore from 'swiper'
import { IoIosArrowRoundForward } from 'react-icons/io'

interface LandingCategorySwiperProps {
  children: React.ReactNode
  categoryName: string
}

const LandingCategorySwiper: FC<LandingCategorySwiperProps> = ({
  children,
  categoryName,
}) => {
  const slideRightArrowRef = useRef(null)
  const slideLeftArrowRef = useRef(null)
  const [swiper, setSwiper] = useState<SwiperCore>()

  return (
    <div className="pl-12 pr-12">
      <h2 className="text-2xl  ">{categoryName}</h2>

      <div className="flex items-center">
        <div
          ref={slideLeftArrowRef}
          className="bg-white rounded-full cursor-pointer flex items-center justify-center absolute z-10 left-7 shadow-md"
          onClick={() => swiper?.slidePrev()}
        >
          <IoIosArrowRoundForward
            size={30}
            className="fill-sky m-3 rotate-180"
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
          className="bg-white rounded-full cursor-pointer flex items-center justify-center absolute z-10 right-6 shadow-md"
        >
          <IoIosArrowRoundForward
            size={30}
            className="fill-sky m-3 transform"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingCategorySwiper
