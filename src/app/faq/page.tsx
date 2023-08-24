'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import faqData from '@/data/faqData'

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex min-h-full items-start justify-center">
      <div className="container mx-auto mt-8 flex h-full flex-col md:mt-12 md:flex-row">
        <div className="relative w-full  md:w-1/2">
          <Image
            src="/meetdox-mockup.jpeg"
            fill
            alt="FAQ Image"
            className="relative top-0 h-60 w-full object-contain md:h-auto"
          />
        </div>
        <div className="w-full p-4 md:w-1/2 md:p-8">
          <h1 className="mb-4 text-xl font-medium md:mb-8 md:text-2xl">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-3 shadow-md"
              >
                <div
                  className="flex cursor-pointer justify-between"
                  onClick={() =>
                    activeIndex === index
                      ? setActiveIndex(null)
                      : setActiveIndex(index)
                  }
                >
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
    </div>
  )
}
export default Page
