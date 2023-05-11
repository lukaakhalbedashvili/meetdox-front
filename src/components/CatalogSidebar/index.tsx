'use client'
import React from 'react'
import Head from 'next/head'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import { teachersDummyData } from '@/data/teachersDummyData'

const CatalogSidebar = () => {
  return (
    <>
      <Head>
        <title>Catalog</title>
      </Head>
      <div className="flex flex-col px-8 md:flex-row">
        <div className="bg-error p-4 md:w-1/4">
          <h2 className="mb-2 font-bold">Filters</h2>
          <div className="mb-4">
            <label className="mb-2 block font-bold" htmlFor="categoryFilter">
              Category
            </label>
            <select
              id="categoryFilter"
              className="border-gray-400 w-full rounded-md border p-2"
            >
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-bold" htmlFor="priceFilter">
              Price
            </label>
            <select
              id="priceFilter"
              className="border-gray-400 w-full rounded-md border p-2"
            >
              <option value="">All</option>
              <option value="0-10">0-10</option>
              <option value="10-50">10-50</option>
              <option value="50-100">50-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
        </div>
        <div className="-z-60 p-4 md:w-3/4">
          {/* Sorting options */}
          {/* Example sort options: */}
          <div className="mb-4">
            <label className="mb-2 block font-bold" htmlFor="sortOrder">
              Sort by price
            </label>
            <select
              id="sortOrder"
              className="border-gray-400 w-full rounded-md border p-2"
            >
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
            </select>
          </div>

          <div className="relative z-20 flex flex-wrap gap-4 md:justify-between md:px-4 lg:px-8">
            {teachersDummyData.map((item) => (
              <TeacherPublicPreview
                key={item.id}
                price={20}
                totalReviews={12}
                rating={4.5}
                image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
                lastName="Akhalbedashvili"
                name="Luka"
                title="I am a teacher, with 12 years of experience I am a teacher, with 12 years of experience"
                tags={['Math', 'Physics', 'Chemistry']}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default CatalogSidebar
