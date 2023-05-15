import { useState } from 'react'
import { TeacherData } from './catalog.interface'

const useCatalog = () => {
  const [totalPaginationPages, setTotalPaginationPages] = useState<number>(30)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [teachersData, setTeachersData] = useState<TeacherData[]>([])

  return {
    totalPaginationPages,
    setTotalPaginationPages,
    currentPage,
    setCurrentPage,
    teachersData,
    setTeachersData,
  }
}

export default useCatalog
