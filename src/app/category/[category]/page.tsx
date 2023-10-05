'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import CatalogRoutes from '@/components/CatalogRoutes'
import Catalog from '@/components/Catalog'
import { categories } from '@/data/categoryItems'
import HeadData from '@/components/HeadData'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const searchParams = useSearchParams()

  const subCategories = searchParams.get('sub-categories')?.split(',')

  const category = categories.find((cat) => cat.url === params.category)

  const subCategoriesNames = subCategories
    ?.map((subCategory) => {
      const subCategoryName = category?.subCategories.find(
        (subCat) => subCat.url === subCategory
      )?.name

      return subCategoryName
    })
    .filter((singleSubCategoryName) => !!singleSubCategoryName)
  return (
    <div className="bg-white font-ubuntu">
      <HeadData
        title={`Meetdox - Schedule a meeting with ${
          subCategories![0] !== undefined
            ? subCategories![0] + 's'
            : category?.name + 's'
        }`}
        desc="Explore Meetdox, your personal expertise hub connecting you with verified experts. Schedule one-on-one online consultations and gain valuable insights on various topics. Elevate your skills and knowledge with our diverse community of mentors. Join us to learn, grow, and achieve your goals!"
      />
      <CatalogRoutes
        category={category}
        subCategories={subCategories}
        subCategoriesNames={subCategoriesNames as string[]}
      />

      <Catalog
        category={category}
        subCategories={subCategories}
        subCategoriesNames={subCategoriesNames as string[]}
      />
    </div>
  )
}

export default CategoryPage
