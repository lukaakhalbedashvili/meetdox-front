'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import faqData from '@/data/faqData'

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex h-full w-full justify-between">
      <div className="relative hidden w-1/2 items-center justify-center lg:flex">
        <div className="relative h-96 w-96">
          <Image src="/meetdox-mockup.png" fill alt="FAQ Image" />
        </div>
      </div>

      <div className="w-full overflow-scroll p-4 md:w-1/2 md:p-8">
        <h1 className="mb-4 text-xl font-medium md:mb-8 md:text-2xl">
          Frequently Asked Questions
        </h1>

        <div className="overflow-scroll">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                activeIndex === index
                  ? setActiveIndex(null)
                  : setActiveIndex(index)
              }
              className="mb-5 cursor-pointer rounded-xl border bg-white p-3 shadow-md"
            >
              <div className="flex justify-between">
                <h3 className="text-sm font-medium md:text-base">
                  {faq.question}
                </h3>

                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>

              {activeIndex === index && (
                <p className="mt-2 text-xs font-thin md:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Page
