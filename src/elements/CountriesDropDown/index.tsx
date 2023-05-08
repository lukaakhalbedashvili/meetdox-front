import React, { FC, HTMLInputTypeAttribute } from 'react'
import { CountriesOption } from './countriesDopDown.interface'

interface CountriesDropDownProps {
  type?: HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  onBlurHandler: (e: React.FocusEvent<HTMLSelectElement>) => void
  errorMessage: string | undefined | false
  value: string
  options: CountriesOption[]
  placeHolderValue?: string
}

const CountriesDropDown: FC<CountriesDropDownProps> = ({
  options,
  onChange,
  value,
  onBlurHandler,
  name,
  placeHolderValue,
  errorMessage,
}) => {
  return (
    <div className="relative h-full w-full">
      <select
        name={name}
        onChange={onChange}
        className={`h-full w-full rounded-md border-border_gray  pl-4 text-sm focus:outline-none ${
          value === placeHolderValue ? 'text-disable_gray' : 'text-black'
        }  ${
          errorMessage
            ? 'border border-error_icon_red'
            : 'border-2 border-border_gray'
        }`}
        value={value}
        onBlur={onBlurHandler}
      >
        {options.map((item) => {
          return (
            <option value={item.value} key={item.value}>
              {item.flag}&emsp;
              {item.value}
            </option>
          )
        })}
      </select>
      <div className="absolute -bottom-2 right-2 w-fit bg-white px-1 text-sm text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default CountriesDropDown
