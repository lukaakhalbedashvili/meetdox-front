'use client'
import React from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import Checkbox from '@/elements/Checkbox'
import useCatalogSideBar from './useCatalogSideBar'
import { Category } from './catalogSidebar.interface'
export interface CatalogSidebarProps {
  category: Category | undefined
  subCategories: string[]
}

const CatalogSidebar = ({ category, subCategories }: CatalogSidebarProps) => {
  const {
    subCategoriesData,
    checkboxHandler,
    selectedCountry,
    skills,
    countriesList,
    setSkills,
    setSelectedCountry,
    setExpandedCategory,
    setExpandedPrice,
    setExpandedCountry,
    setExpandedSkills,
    isExpandedCategory,
    isExpandedPrice,
    isExpandedCountry,
    isExpandedSkills,
  } = useCatalogSideBar({ category, subCategories })

  return (
    <div className="px-0 sm:px-4 md:w-1/5">
      <div className="mb-0 mt-6 sm:mb-4 sm:mt-16 ">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 block text-sm font-medium text-text_gray">
            {category?.name}
          </h1>

          {!isExpandedCategory ? (
            <HiChevronDown
              className="mb-2 h-6 w-6 cursor-pointer text-text_gray"
              onClick={() => setExpandedCategory(!isExpandedCategory)}
            />
          ) : (
            <HiChevronUp
              className="mb-2 h-6 w-6 cursor-pointer text-text_gray"
              onClick={() => setExpandedCategory(!isExpandedCategory)}
            />
          )}
        </div>
        {isExpandedCategory && (
          <ul className="text-xs text-text_gray">
            {subCategoriesData &&
              subCategoriesData?.length > 0 &&
              subCategoriesData.map((item) => (
                <div
                  className="flex h-9 cursor-pointer items-center rounded-md pl-2 hover:bg-border_gray"
                  key={item.name}
                  onClick={() => {
                    checkboxHandler(item.name)
                  }}
                >
                  <Checkbox id={item.name} isChecked={item.checked} />

                  <p className="ml-4">{item.name}</p>
                </div>
              ))}
          </ul>
        )}
      </div>
      <div className="pt-2 pb-4 sm:pb-6">
        <hr className="border-border_gray" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="mb-2 block text-sm font-medium text-text_gray">
            Price
          </h1>
          {!isExpandedPrice ? (
            <HiChevronDown
              className="mb-2 h-6 w-6 cursor-pointer text-text_gray"
              onClick={() => setExpandedPrice(!isExpandedPrice)}
            />
          ) : (
            <HiChevronUp
              className="mb-2 h-6 w-6 cursor-pointer text-text_gray"
              onClick={() => setExpandedPrice(!isExpandedPrice)}
            />
          )}
        </div>
        {isExpandedPrice && (
          <div className="ml-2 flex flex-row items-center">
            <input
              type="number"
              className="w-1/2 rounded-md border border-border_gray px-4 py-2 pr-8 text-sm text-text_gray focus:outline-none"
              placeholder="Min"
            />
            <span className="mx-2 mb-[2px] text-xl">-</span>
            <input
              type="number"
              className="w-1/2 rounded-md border border-border_gray px-4 py-2 pr-8 text-sm text-text_gray focus:outline-none"
              placeholder="Max"
            />
          </div>
        )}
        <div className="pt-2 pb-4 sm:pb-6 sm:pt-6">
          <hr className="border-border_gray" />
        </div>
        <div className="w-full pr-2">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 block text-sm font-medium text-text_gray">
              Country
            </h1>
            {!isExpandedCountry ? (
              <HiChevronDown
                className="-mr-2 mb-2 h-6 w-6 cursor-pointer text-text_gray"
                onClick={() => setExpandedCountry(!isExpandedCountry)}
              />
            ) : (
              <HiChevronUp
                className="mb-2 -mr-2 h-6 w-6 cursor-pointer text-text_gray"
                onClick={() => setExpandedCountry(!isExpandedCountry)}
              />
            )}
          </div>
          {isExpandedCountry && (
            <div className="relative ml-2 h-10 w-full">
              <select
                name={'country'}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={`h-full w-full rounded-md border-[1px] border-border_gray pl-4 text-sm text-black focus:outline-none`}
                value={selectedCountry}
              >
                {[{ value: 'All', flag: '🏳️' }, ...countriesList].map(
                  (item: any) => {
                    return (
                      <option value={item.value} key={item.value}>
                        {item.flag}&emsp;
                        {item.value}
                      </option>
                    )
                  }
                )}
              </select>
            </div>
          )}
        </div>
        <div className="pt-2 pb-4 sm:pb-6 sm:pt-6">
          <hr className="border-border_gray" />
        </div>
        <div className="w-full pr-2">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 block text-sm font-medium text-text_gray">
              Skills
            </h1>
            {!isExpandedSkills ? (
              <HiChevronDown
                className="mb-2 -mr-2 h-6 w-6 cursor-pointer text-text_gray"
                onClick={() => setExpandedSkills(!isExpandedSkills)}
              />
            ) : (
              <HiChevronUp
                className="mb-2 -mr-2 h-6 w-6 cursor-pointer text-text_gray"
                onClick={() => setExpandedSkills(!isExpandedSkills)}
              />
            )}
          </div>
          {isExpandedSkills && (
            <div className="flex flex-wrap">
              <ul className="text-xs text-text_gray">
                {skills &&
                  skills?.length > 0 &&
                  skills.map((item) => (
                    <div
                      className="flex h-9 cursor-pointer items-center rounded-md pl-2 hover:bg-border_gray"
                      key={item.name}
                      onClick={() => {
                        const newArr = skills.map((skill) => {
                          if (skill.name === item.name) {
                            return {
                              ...skill,
                              checked: !skill.checked,
                            }
                          }
                          return skill
                        })
                        setSkills(newArr)
                      }}
                    >
                      <Checkbox id={item.name} isChecked={item.checked} />

                      <p className="ml-4">{item.name}</p>
                    </div>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default CatalogSidebar
