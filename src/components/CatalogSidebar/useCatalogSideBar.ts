'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { countries } from '@/data/countries'
import { CatalogSidebarProps } from '.'
import { SubCategory } from './catalogSidebar.interface'

const useCatalogSideBar = ({
  category,
  subCategories,
}: CatalogSidebarProps) => {
  const router = useRouter()
  const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>([])
  const [skills, setSkills] = useState<SubCategory[]>([])
  const [selectedCountry, setSelectedCountry] = useState('All')
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
    selectedCountry,
    skills,
    countriesList,
    setSkills,
    setSelectedCountry,
  }
}

export default useCatalogSideBar
