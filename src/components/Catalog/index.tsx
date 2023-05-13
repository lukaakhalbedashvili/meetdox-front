'use client'

import React, { useState } from 'react'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import { teachersDummyData } from '@/data/teachersDummyData'
import Pagination from '@/elements/Pagination'
import CatalogSidebar from '../CatalogSidebar'

interface CatalogProps {
  category:
    | {
        name: string
        url: string
        subCategories:
          | {
              name: string
              url: string
            }[]
      }
    | undefined
  subCategories: string[]
}
const Catalog = ({ category, subCategories }: CatalogProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPaginationPages = 30
  return (
    <>
      <div className="flex flex-col px-8 md:flex-row">
        <CatalogSidebar category={category} subCategories={subCategories} />
        <div className="p-4 md:w-4/5">
          <div className="flex justify-end ">
            <div className="relative inline-flex">
              <select
                id="sortOrder"
                className="w-full rounded-md border border-border_gray px-4 py-2 pr-8 text-sm text-text_gray focus:outline-none"
              >
                <option value="asc">Low to high</option>
                <option value="desc">High to low</option>
                <option value="desc">Newest</option>
                <option value="desc">Oldest</option>
                <option value="desc">Popular</option>
              </select>
            </div>
          </div>
          <div className="pt-4 pb-6">
            <hr className="border-border_gray" />
          </div>
          <div className="relative z-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPaginationPages}
            onChangePage={(page) => {
              setCurrentPage(page)
            }}
          />
        </div>
      </div>
    </>
  )
}
export default Catalog
