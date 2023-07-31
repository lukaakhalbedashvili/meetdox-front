'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import CatalogRoutes from '@/components/CatalogRoutes'
import Catalog from '@/components/Catalog'
import { categories } from '@/data/categoryItems'

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
