'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { categories } from '@/data/categoryItems'

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <nav className="hidden w-full border-border_gray bg-white  px-12 font-normal text-text_gray md:flex">
      <div className="flex h-[40px]">
        {categories.map((category, i) => (
          <div
            key={category.name}
            className="relative mr-8"
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory('')}
          >
            <Link href={`/category/${category.url}`}>
              <p className=" flex h-full items-center border-0 border-sky px-2 py-1 text-xs font-normal  hover:border-b-2">
                {category.name}
              </p>
            </Link>
            {activeCategory === category.name && (
              <div
                className={`absolute top-full  ${
                  i > categories.length / 2 ? '-left-24' : 'left-6'
                }  z-50 border-[1px] border-border_gray bg-white py-2 pr-4 font-normal text-text_gray`}
              >
                {category.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    href={`/category/${
                      category.url
                    }?sub-categories=${encodeURIComponent(
                      [subCategory.url].join(',')
                    )}`}
                  >
                    <p className="flex h-6 items-center whitespace-nowrap px-4 text-xs hover:text-sky">
                      {subCategory.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default CategoryNav
