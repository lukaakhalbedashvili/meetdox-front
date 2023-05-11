'use client'
import React from 'react'
import { useRouter } from 'next/router'

const CategoryPage = () => {
  const router = useRouter()

  return <p>Post: {router.query.category}</p>
}

export default CategoryPage
