import Link from 'next/link'
import React, { useState } from 'react'

import { categories } from '@/data/categoryItems'

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('Accountant')

  return (
    <nav className="flex w-full bg-white border-border_gray border-b-[1px] px-12 font-normal text-text_gray">
      <div className="flex w-full justify-between h-[40px]">
        {categories.map((category, i) => (
          <div
            key={category.name}
            className="relative"
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory('')}
          >
            <Link href={`/category/${category.url}`}>
              <p className=" font-normal text-sm border-sky border-0 hover:border-b-2 h-full px-2 py-1 flex  items-center">
                {category.name}
              </p>
            </Link>
            {activeCategory === category.name && (
              <div
                className={`absolute top-full  ${
                  i > categories.length / 2 ? '-left-72' : 'left-0'
                } w-96 py-4 grid grid-cols-2 gap-4 bg-white z-50 border-border_gray border-[1px] font-normal text-text_gray`}
              >
                {category.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    href={`/category/${category.url}/${subCategory.url}`}
                  >
                    <p className="block px-4 text-sm hover:text-sky">
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
