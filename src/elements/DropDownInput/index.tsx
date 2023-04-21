import React, { FC, HTMLInputTypeAttribute } from 'react'

interface DropDownInputProps {
  type?: HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  onBlurHandler: (e: React.FocusEvent<HTMLSelectElement>) => void
  errorMessage: string | undefined | false
  value: string
  options: (string | number)[]
  placeHolderValue?: string
}

const DropDownInput: FC<DropDownInputProps> = ({
  options,
  onChange,
  value,
  onBlurHandler,
  name,
  placeHolderValue,
  errorMessage,
}) => {
  const optionsWithDefaultValue = placeHolderValue
    ? [...options, placeHolderValue]
    : options

  return (
    <div className="relative h-full">
      <select
        name={name}
        onChange={onChange}
        className={`h-full rounded-md border-2 border-border_gray pl-1 text-sm ${
          value === placeHolderValue ? 'text-disable_gray' : 'text-black'
        }`}
        value={value}
        onBlur={onBlurHandler}
      >
        {optionsWithDefaultValue.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          )
        })}
      </select>
      <div className="absolute top-[42px] right-[0px] w-fit text-sm text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default DropDownInput
