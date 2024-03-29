import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import useNavigationSearchBar from './useNavigationSearchBar'

const NavigationSearchBar = () => {
  const {
    inputElement,
    isShowDropdown,
    dropdownItems,
    handleInputChange,
    handleDropdownItemClick,
  } = useNavigationSearchBar()

  return (
    <div className="relative flex h-[35px]">
      <AiOutlineSearch
        className="absolute left-3 top-2 z-30 text-icon_gray"
        size={20}
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Who are you looking for?"
        className="z-20 w-full rounded-l-md rounded-r-none border-[1px] border-border_gray px-4 py-2 pl-10 text-sm font-medium focus:outline-none md:w-[250px] xl:w-[300px]"
        ref={inputElement}
      />
      <button
        className="hover:bg-blue-600 focus:bg-blue-600 z-20 rounded-l-none rounded-r-md bg-sky px-4 text-sm font-medium text-white focus:outline-none"
        onClick={() => handleInputChange()}
      >
        Search
      </button>
      {isShowDropdown && (
        <div className="absolute left-0 top-[32px] z-10 w-full rounded-b-md border border-t-0 border-border_gray bg-white pb-2 pt-2">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer px-2 py-1 pl-[12px] text-sm hover:bg-gray"
              onClick={() => handleDropdownItemClick(item.uid)}
            >
              <AiOutlineSearch
                className=" z-30 mr-[8px] text-icon_gray"
                size={20}
              />
              {`${item.personalDetails.name} ${item.personalDetails.lastName}`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavigationSearchBar
