import Link from 'next/link'
import React, { useState } from 'react'

import { categories } from '@/data/categoryItems'

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <nav className="flex w-full bg-white border-border_gray  px-12 font-normal text-text_gray">
      <div className="flex h-[40px]">
        {categories.map((category, i) => (
          <div
            key={category.name}
            className="relative mr-8"
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory('')}
          >
            <Link href={`/category/${category.url}`}>
              <p className=" font-normal text-xs border-sky border-0 hover:border-b-2 h-full px-2 py-1 flex  items-center">
                {category.name}
              </p>
            </Link>
            {activeCategory === category.name && (
              <div
                className={`absolute top-full  ${
                  i > categories.length / 2 ? '-left-24' : 'left-6'
                }  py-2 pr-4 bg-white z-50 border-border_gray border-[1px] font-normal text-text_gray`}
              >
                {category.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    href={`/category/${category.url}/${subCategory.url}`}
                  >
                    <p className="px-4 text-xs hover:text-sky h-6 flex items-center whitespace-nowrap">
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
