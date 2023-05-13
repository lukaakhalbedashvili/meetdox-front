'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Checkbox from '@/elements/Checkbox'
import { countries } from '@/data/countries'
interface CatalogSidebarProps {
  category:
    | {
        name: string
        url: string
        skills: string[]
        subCategories:
          | {
              name: string
              url: string
            }[]
      }
    | undefined
  subCategories: string[]
}
interface SubCategory {
  name: string
  url: string
  checked: boolean
}

const CatalogSidebar = ({ category, subCategories }: CatalogSidebarProps) => {
  const router = useRouter()

  const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>([])
  const [skills, setSkills] = useState<SubCategory[]>([])
  const [selectedCountry, setSelectedCountry] = useState('All')
  const countriesList = countries.map((country) => {
    return { value: country.name, flag: country.flag }
  })
  countriesList.unshift({ value: 'All', flag: '🏳️' })

  useEffect(() => {
    setSubCategoriesData(
      category?.subCategories.map((item) => {
        return {
          name: item.name,
          url: item.url,
          checked: subCategories.includes(item.url) ? true : false,
        }
      }) || []
    )

    setSkills(
      category?.skills.map((item) => {
        return {
          name: item,
          url: item,
          checked: subCategories.includes(item) ? true : false,
        }
      }) || []
    )
  }, [category, subCategories])

  const checkboxHandler = (name: string) => {
    const renewedSubCategoriesData = subCategoriesData.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })

    const renewedCheckedSubCategories = renewedSubCategoriesData.filter(
      (item) => item.checked
    )

    setSubCategoriesData(renewedSubCategoriesData)

    router.push(
      `/category/${category?.url}?sub-categories=${encodeURIComponent(
        renewedCheckedSubCategories.map((item) => item.url).join(',')
      )}`
    )
  }

  return (
    <div className="px-4 md:w-1/5">
      <div className="mb-4 mt-16 ">
        <h1 className="mb-2 block text-base font-medium text-text_gray">
          {category?.name}
        </h1>
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
                <Checkbox
                  id={item.name}
                  isChecked={item.checked}
                  onChange={() => console.log('rame')}
                />

                <p className="ml-4">{item.name}</p>
              </div>
            ))}
        </ul>
      </div>
      <div className="pt-2 pb-6">
        <hr className="border-border_gray" />
      </div>
      <div>
        <h1 className="mb-2 block text-base font-medium text-text_gray">
          Price
        </h1>
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
        <div className="pt-8 pb-6">
          <hr className="border-border_gray" />
        </div>
        <div className="w-full pr-2">
          <h1 className="mb-2 block text-base font-medium text-text_gray">
            Country
          </h1>
          <div className="relative ml-2 h-10 w-full">
            <select
              name={'country'}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className={`h-full w-full rounded-md border-[1px] border-border_gray pl-4 text-sm text-black focus:outline-none`}
              value={selectedCountry}
            >
              {countriesList.map((item: any) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.flag}&emsp;
                    {item.value}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="pt-8 pb-6">
          <hr className="border-border_gray" />
        </div>
        <div className="w-full pr-2">
          <h1 className="mb-2 block text-base font-medium text-text_gray">
            Skills
          </h1>
          {/* CHECKBOX */}

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
                    <Checkbox
                      id={item.name}
                      isChecked={item.checked}
                      onChange={() => console.log('rame')}
                    />

                    <p className="ml-4">{item.name}</p>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CatalogSidebar
