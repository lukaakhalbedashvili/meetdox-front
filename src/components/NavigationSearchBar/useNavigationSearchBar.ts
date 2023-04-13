import React, { useState } from 'react'

const useNavigationSearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const [isShowDropdown, setIsShowDropdown] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchText(value)
    setIsShowDropdown(value.length > 0)
  }

  const handleDropdownItemClick = (item: string) => {
    setSearchText(item)
    setIsShowDropdown(false)
  }

  const categoriesAndSubcategories = [
    'Doctor',
    'Dentist',
    'Teacher',
    'Lawyer',
    'Accountant',
    'Psychologist',
    'Nutritionist',
    'Dietitian',
    'Fitness Trainer',
  ]

  const users = [
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Lasha Markhvaidze',
    'Luka Akhalbedashvili',
  ]

  const filteredCategoriesAndSubcategories = categoriesAndSubcategories.filter(
    (item) => item.toLowerCase().includes(searchText.toLowerCase())
  )

  const filteredUsers = users.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  )

  const dropdownItems =
    filteredCategoriesAndSubcategories.length > 0
      ? filteredCategoriesAndSubcategories.slice(0, 10)
      : filteredUsers.slice(0, 10)

  return {
    searchText,
    isShowDropdown,
    dropdownItems,
    handleInputChange,
    handleDropdownItemClick,
  }
}

export default useNavigationSearchBar
