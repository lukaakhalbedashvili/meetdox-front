'use client'
import React from 'react'
// home icon
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'

interface CatalogRoutesProps {
  category: string
  subCategory: string
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
            <AiOutlineHome className="h-4 w-4" />
          </Link>
        </li>
        <span className="mx-2 text-xl">•</span>
        <li className="flex flex-row items-center text-sm">
          <Link href={`/category/${category}`}> {category}</Link>
        </li>
        {subCategory && (
          <>
            <span className="mx-2 text-xl">•</span>
            <li className="flex flex-row items-center text-sm">
              <Link href={`/category/${category}/${subCategory}`}>
                {' '}
                {subCategory}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default CatalogRoutes
