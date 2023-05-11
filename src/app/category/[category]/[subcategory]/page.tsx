import React from 'react'
import CatalogRoutes from '@/components/CatalogRoutes'

interface SubCategoryPageProps {
  params: {
    category: string
    subcategory: string
  }
}

const SubCategoryPage = ({ params }: SubCategoryPageProps) => {
  return (
    <div className="bg-white font-ubuntu">
      <CatalogRoutes
        category={params.category}
        subCategory={params.subcategory}
      />
    </div>
  )
}

export default SubCategoryPage
