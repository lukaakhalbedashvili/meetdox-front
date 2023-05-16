import { useState } from 'react'
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

  const onlyNamesPickedFromSkills = skills
    .filter((item) => item.checked)
    .map((item) => item.name)

  useGetTeachers({
    limit: 20,
    category: category?.name,
    subCategories: subCategoriesNames[0] === 'null' ? [] : subCategoriesNames,
    skills: onlyNamesPickedFromSkills,
    country: country === 'All' ? '' : country,
    page: currentPage,
    onSuccess: (data) => {
      setTeachersData(data.teachers)
      setTotalPaginationPages(Math.ceil(data.totalItems / 20))
    },
  })

  return {
    totalPaginationPages,
    currentPage,
    setCurrentPage,
    teachersData,
    skills,
    setSkills,
    country,
    setCountry,
  }
}

export default useCatalog
