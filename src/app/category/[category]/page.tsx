import React from 'react'
import CatalogRoutes from '@/components/CatalogRoutes'
import Catalog from '@/components/Catalog'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <div className=" bg-white font-ubuntu">
      <CatalogRoutes category={params.category} subCategory={null} />
      <Catalog category={params.category} />
    </div>
  )
}

export default CategoryPage
