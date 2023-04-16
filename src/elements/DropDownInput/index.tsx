import React, { FC, HTMLInputTypeAttribute } from 'react'

interface DropDownInputProps {
  type?: HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  onBlurHandler: (e: React.FocusEvent<HTMLSelectElement>) => void
  errorMessage: string | undefined | false
  value: string
  options: string[]
}

const DropDownInput: FC<DropDownInputProps> = ({
  options,
  onChange,
  value,
  onBlurHandler,
}) => {
  return (
    <select
      onChange={onChange}
      className="h-full border-2 border-border_gray rounded-md pl-1"
      value={value}
      onBlur={onBlurHandler}
    >
      {options.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        )
      })}
    </select>
  )
}

export default DropDownInput
