'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import faqData from '@/data/faqData'

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="relative h-screen w-1/2 p-8">
          <Image
            src="/meetdox-mockup.jpeg"
            fill
            alt="FAQ Image"
            className="relative top-0 h-full w-full object-contain"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <h1 className="mt-18 mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-4 shadow-md"
              >
                <div
                  className="flex cursor-pointer justify-between"
                  onClick={() =>
                    activeIndex === index
                      ? setActiveIndex(null)
                      : setActiveIndex(index)
                  }
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
