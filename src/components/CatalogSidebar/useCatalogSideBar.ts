'use client'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { countries } from '@/data/countries'
import { CatalogSidebarProps } from '.'
import { SubCategory } from './catalogSidebar.interface'

const useCatalogSideBar = ({
  category,
  subCategories,
  skills,
  setSkills,
  country,
  setStartPrice,
  setEndPrice,
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
          checked: !!subCategories?.includes(item.url),
        }
      }) || []
    )

    setSkills(
      category?.skills.map((item) => {
        return {
          name: item,
          url: item,
          checked: !!subCategories?.includes(item),
        }
      }) || []
    )
  }, [category, subCategories])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePriceStartChange = useCallback(
    debounce((value) => setStartPrice(value), 1000),
    []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePriceEndChange = useCallback(
    debounce((value) => setEndPrice(value), 1000),
    []
  )

  const checkboxHandler = (name: string) => {
    const renewedSubCategoriesData = subCategoriesData.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          checked: !item.checked,
        }
      } else {
        return {
          ...item,
          checked: false,
        }
      }
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
    handlePriceStartChange,
    handlePriceEndChange,
  }
}

export default useCatalogSideBar
