import React from 'react'
import CatalogRoutes from '@/components/CatalogRoutes'

const page = () => {
  return (
    <div className=" bg-white font-ubuntu">
      <CatalogRoutes category="category" subCategory="subCategory" />
    </div>
  )
}

export default page
