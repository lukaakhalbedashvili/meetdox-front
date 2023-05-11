'use client'
import React from 'react'
// home icon
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'
import { categories } from '@/data/categoryItems'

interface CatalogRoutesProps {
  category: string
  subCategory: string | null
}

const CatalogRoutes: React.FC<CatalogRoutesProps> = ({
  category,
  subCategory,
}) => {
  return (
    <nav className="mt-3 hidden w-full border-border_gray  bg-white px-12 font-normal text-text_gray md:flex">
      <ul className="flex w-full flex-row items-center">
        <li className="flex flex-row items-center">
          <Link href="/">
            <AiOutlineHome className="mb-[1px] h-4 w-4" />
          </Link>
        </li>
        <span className="mx-2 mb-[2px] text-xl">•</span>
        <li className="flex flex-row items-center text-sm">
          <Link href={`/category/${category}`} className="text-xs">
            {' '}
            {categories.map((cat) => (cat.url === category ? cat.name : null))}
          </Link>
        </li>
        {subCategory && (
          <>
            <span className="mx-2 mb-[2px] text-xl">•</span>
            <li className="flex flex-row items-center text-sm">
              <Link
                href={`/category/${category}/${subCategory}`}
                className="text-xs"
              >
                {categories.map((cat) =>
                  cat.url === category
                    ? cat.subCategories.map((subCat) =>
                        subCat.url === subCategory ? subCat.name : null
                      )
                    : null
                )}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default CatalogRoutes
