'use client'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'

interface CatalogRoutesProps {
  category:
    | {
        name: string
        url: string
        subCategories:
          | {
              name: string
              url: string
            }[]
      }
    | undefined
  subCategories: string[]
  subCategoriesNames: string[]
}

const CatalogRoutes: React.FC<CatalogRoutesProps> = ({
  category,
  subCategories,
  subCategoriesNames,
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
          <Link href={`/category/${category?.url}`} className="text-xs">
            {' '}
            {category?.name}
          </Link>
        </li>
        {subCategories[0] !== 'null' &&
          subCategoriesNames !== undefined &&
          subCategories[0] !== '' && (
            <>
              <span className="mx-2 mb-[2px] text-xl">•</span>
              {subCategories.map((subCategory, i) => (
                <li
                  className="flex flex-row items-center text-sm"
                  key={subCategory}
                >
                  <Link
                    href={`/category/${
                      category?.url
                    }?sub-categories=${encodeURIComponent(
                      [subCategory].join(',')
                    )}`}
                    className="text-xs"
                  >
                    &nbsp;
                    {subCategoriesNames[i]}&nbsp;
                    {i !== subCategories.length - 1 && '& '}
                  </Link>
                </li>
              ))}
            </>
          )}
      </ul>
    </nav>
  )
}

export default CatalogRoutes
