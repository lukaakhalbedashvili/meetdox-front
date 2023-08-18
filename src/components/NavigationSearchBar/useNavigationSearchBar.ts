import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGetSearchedUserData } from '@/reactQuery/teacherQuaries/getSearchedTeachersData'
import { TeacherData } from '../Catalog/catalog.interface'

const useNavigationSearchBar = () => {
  const inputElement = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [isShowDropdown, setIsShowDropdown] = useState(false)
  const [dropdownItems, setDropdownItems] = useState<TeacherData[] | []>([])
  const { data } = useGetSearchedUserData(inputElement.current?.value)

  const handleInputChange = () => {
    setDropdownItems([])
  }

  useEffect(() => {
    if (!data) return
    setDropdownItems(data)
    setIsShowDropdown(data.length > 0)
  }, [data])

  const handleDropdownItemClick = (item: string) => {
    setIsShowDropdown(false)
    router.push('/expert/' + item)
  }

  return {
    inputElement,
    isShowDropdown,
    dropdownItems,
    handleInputChange,
    handleDropdownItemClick,
  }
}

export default useNavigationSearchBar
