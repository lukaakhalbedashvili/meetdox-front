import React, { useState } from 'react'
import CatalogRoutes from '@/components/CatalogRoutes'

const page = () => {
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  return (
    <div className="h-[500px] bg-white font-ubuntu">
      <CatalogRoutes category="category" subCategory="subCategory" />
    </div>
  )
}

export default page
