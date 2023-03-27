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
  value,
  errorMessage,
  name,
  onBlurHandler,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="w-full h-full relative border-2 border-border_gray flex align-center justify-center rounded-md">
      <input
        className="h-full w-full rounded-md pl-5 text-xl bg-white"
        type={type}
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="absolute text-error top-[15px] right-[10px] w-fit">
        {errorMessage}
      </div>
    </div>
  )
}

export default Input
