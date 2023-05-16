'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useCatalog from './useCatalog'
import { Category } from '../CatalogSidebar/catalogSidebar.interface'
const Pagination = dynamic(() => import('@/elements/Pagination'), {
  ssr: false,
})
const CatalogSidebar = dynamic(() => import('../CatalogSidebar'), {
  ssr: false,
})

interface CatalogProps {
  category: Category | undefined
  subCategories: string[]
  subCategoriesNames: string[]
}
const Catalog = ({
  category,
  subCategories,
  subCategoriesNames,
}: CatalogProps) => {
  const {
    totalPaginationPages,
    currentPage,
    setCurrentPage,
    teachersData,
    skills,
    setSkills,
    country,
    setCountry,
  } = useCatalog({ category, subCategoriesNames })

  return (
    <>
      <div className="flex flex-col px-4 sm:px-8  md:flex-row">
        <CatalogSidebar
          category={category}
          subCategories={subCategories}
          skills={skills}
          setSkills={setSkills}
          country={country}
          setCountry={setCountry}
        />
        <div className="py-4 sm:p-4 md:w-4/5">
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
            {teachersData.map((item) => (
              <TeacherPublicPreview
                key={item.uid}
                price={20}
                totalReviews={12}
                rating={4.5}
                image={item.image}
                lastName={item.personalDetails.lastName}
                name={item.personalDetails.name}
                title={item.description}
                tags={[item.skills[0], item.skills[1]]}
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
