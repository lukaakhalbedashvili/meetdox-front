'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'
import TeacherPublicPreview from '@/elements/TeacherPublicPreview'
import useCatalog from './useCatalog'
import { Category } from '../CatalogSidebar/catalogSidebar.interface'
const Pagination = dynamic(() => import('@/elements/Pagination'), {
  ssr: false,
})
const CatalogSidebar = dynamic(() => import('../CatalogSidebar'), {
  ssr: false,
})

export interface CatalogProps {
  category: Category | undefined
  subCategories?: string[]
  subCategoriesNames?: string[]
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
    sortingBy,
    setSortingBy,
    startPrice,
    setStartPrice,
    endPrice,
    setEndPrice,
    isLoading,
  } = useCatalog({ category, subCategoriesNames })

  return (
    <>
      <div className="flex flex-col px-4 sm:px-8  md:flex-row lg:min-h-screen">
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
            <ClipLoader color="#36d7b7" />
          </div>
        )}

        {!isLoading && (
          <>
            <CatalogSidebar
              category={category}
              subCategories={subCategories}
              skills={skills}
              setSkills={setSkills}
              country={country}
              setCountry={setCountry}
              startPrice={startPrice}
              setStartPrice={setStartPrice}
              endPrice={endPrice}
              setEndPrice={setEndPrice}
            />

            <div className="py-4 sm:p-4 md:w-4/5">
              <div className="flex justify-end ">
                <div className="relative inline-flex">
                  <select
                    id="sortOrder"
                    onChange={(e) => setSortingBy(e.target.value)}
                    value={sortingBy}
                    className="w-full rounded-md border border-border_gray px-4 py-2 pr-8 text-sm text-text_gray focus:outline-none"
                  >
                    <option value="popular">Popularity</option>
                    <option value="lowtohigh">Low To High</option>
                    <option value="hightolow">High To Low</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 pb-6">
                <hr className="border-border_gray" />
              </div>

              <div className="relative z-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teachersData.map((item) => (
                  <TeacherPublicPreview
                    price={20}
                    key={item.uid}
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
          </>
        )}
      </div>
    </>
  )
}
export default Catalog
