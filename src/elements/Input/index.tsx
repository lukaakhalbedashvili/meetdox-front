import React, { FC, HTMLInputTypeAttribute, ReactNode } from 'react'

interface InputProps {
  value: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string | undefined | false
  name: string
  onBlurHandler?: (e: React.FocusEvent<HTMLInputElement>) => void
  children?: ReactNode
  type: HTMLInputTypeAttribute
}

const Input: FC<InputProps> = ({
  children,
  value,
  errorMessage,
  name,
  onBlurHandler,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="w-full h-full relative">
      <input
        className="h-full w-full rounded-md pl-14 bg-sky neoblutshadow"
        type={type}
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />

      <div className="absolute top-0 w-fit h-full flex items-center justify-center left-4">
        {children}
      </div>

      <div className="absolute bg-lime top-0 right-0 w-fit">{errorMessage}</div>
    </div>
  )
}

export default Input
