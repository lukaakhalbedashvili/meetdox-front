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

  const subCategories = decodeURIComponent(
    searchParams.get('sub-categories')!
  ).split(',')

  const subCategoriesNames = subCategories.map((subCategory) => {
    const category = categories.find((cat) => cat.url === params.category)
    const subCategoryName = category?.subCategories.find(
      (subCat) => subCat.url === subCategory
    )?.name
    if (subCategoryName === undefined) {
      return 'null'
    }
    return subCategoryName
  })
  let category = categories.find((cat) => cat.url === params.category)
  return (
    <div className="bg-white font-ubuntu">
      <CatalogRoutes
        category={category}
        subCategories={subCategories}
        subCategoriesNames={subCategoriesNames}
      />
      <Catalog
        category={category}
        subCategories={subCategories}
        subCategoriesNames={subCategoriesNames}
      />
    </div>
  )
}

export default CategoryPage
