'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { countries } from '@/data/countries'
import { CatalogSidebarProps } from '.'
import { SubCategory } from './catalogSidebar.interface'

const useCatalogSideBar = ({
  category,
  subCategories,
  skills,
  setSkills,
  country,
}: CatalogSidebarProps) => {
  const router = useRouter()
  const isMobile = window.innerWidth < 640

  const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>([])
  const [isExpandedCategory, setExpandedCategory] = useState(!isMobile)
  const [isExpandedPrice, setExpandedPrice] = useState(!isMobile)
  const [isExpandedCountry, setExpandedCountry] = useState(!isMobile)
  const [isExpandedSkills, setExpandedSkills] = useState(!isMobile)

  const countriesList = countries.map((country) => {
    return { value: country.name, flag: country.flag }
  })

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
  return {
    subCategoriesData,
    checkboxHandler,
    country,
    skills,
    countriesList,
    setSkills,
    setExpandedCategory,
    setExpandedPrice,
    setExpandedCountry,
    setExpandedSkills,
    isExpandedCategory,
    isExpandedPrice,
    isExpandedCountry,
    isExpandedSkills,
  }
}

export default useCatalogSideBar
