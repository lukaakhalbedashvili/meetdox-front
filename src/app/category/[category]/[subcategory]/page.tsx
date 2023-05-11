import React from 'react'

interface SubCategoryPageProps {
  subCategory: string
}

const SubCategoryPage = ({ subCategory }: SubCategoryPageProps) => {
  return <p>Post: {subCategory}</p>
}

export default SubCategoryPage
