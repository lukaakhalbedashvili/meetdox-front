import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import useNavigationSearchBar from './useNavigationSearchBar'

const NavigationSearchBar = () => {
  const {
    searchText,
    isShowDropdown,
    dropdownItems,
    handleInputChange,
    handleDropdownItemClick,
  } = useNavigationSearchBar()

  return (
    <div className="relative flex h-[35px]">
      <AiOutlineSearch
        className="absolute left-3 top-2 text-icon_gray z-30"
        size={20}
      />
      <input
        type="text"
        placeholder="Who are you looking for?"
        className="py-2 px-4 pl-10 rounded-l-md rounded-r-none border-[1px] border-border_gray focus:outline-none text-sm font-medium w-[250px] xl:w-[300px] z-20"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="px-4 bg-sky text-white rounded-r-md rounded-l-none hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-sm font-medium z-20">
        Search
      </button>
      {isShowDropdown && (
        <div className="absolute top-[32px] left-0 w-full bg-white border border-border_gray border-t-0 rounded-b-md z-10 pt-2 pb-2">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 hover:bg-gray cursor-pointer text-sm pl-[12px] flex"
              onClick={() => handleDropdownItemClick(item)}
            >
              <AiOutlineSearch
                className=" text-icon_gray z-30 mr-[8px]"
                size={20}
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavigationSearchBar
