import React from 'react'
import CatalogRoutes from '@/components/CatalogRoutes'
import CatalogSidebar from '@/components/CatalogSidebar'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <div className=" bg-white font-ubuntu">
      <CatalogRoutes category={params.category} subCategory={null} />
      <CatalogSidebar />
    </div>
  )
}

export default CategoryPage
