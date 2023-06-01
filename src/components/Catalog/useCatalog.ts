import { useEffect, useState } from 'react'
import { useGetTeachers } from '@/reactQuery/teacherQuaries/getTeachers'
import { TeacherData } from '@/components/Catalog/catalog.interface'
import {
  Category,
  SubCategory,
} from '../CatalogSidebar/catalogSidebar.interface'

interface UseCatalogProps {
  category: Category | undefined
  subCategoriesNames: string[]
}

const useCatalog = ({ category, subCategoriesNames }: UseCatalogProps) => {
  const [totalPaginationPages, setTotalPaginationPages] = useState<number>(20)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [teachersData, setTeachersData] = useState<TeacherData[]>([])
  const [skills, setSkills] = useState<SubCategory[]>([])
  const [country, setCountry] = useState<string>('All')
  const [sortingBy, setSortingBy] = useState<string>('popular')
  const [startPrice, setStartPrice] = useState<number>(0)
  const [endPrice, setEndPrice] = useState<number>(10000)

  const onlyNamesPickedFromSkills = skills
    .filter((item) => item.checked)
    .map((item) => item.name)

  useEffect(() => {
    setCurrentPage(1)
  }, [
    category,
    subCategoriesNames,
    skills,
    country,
    sortingBy,
    startPrice,
    endPrice,
  ])

  const { data, isLoading } = useGetTeachers({
    limit: 20,
    category: category?.name,
    sortingBy,
    subCategories: subCategoriesNames[0] ? [] : subCategoriesNames,
    skills: onlyNamesPickedFromSkills,
    startPrice,
    endPrice,
    country: country === 'All' ? '' : country,
    page: currentPage,
  })

  useEffect(() => {
    if (!data) return
    setTeachersData(data.teachers)
    setTotalPaginationPages(Math.ceil(data.totalItems / 20))
  }, [data])

  return {
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
  }
}

export default useCatalog
