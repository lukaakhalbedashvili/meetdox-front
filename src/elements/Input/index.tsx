import React, { FC, HTMLInputTypeAttribute, ReactNode } from 'react'

interface InputProps {
  value?: string
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
    <div className="align-center relative flex h-full w-full justify-center rounded-md border-2 border-border_gray">
      <input
        className="h-full w-full rounded-md bg-white pl-5 text-sm"
        type={type}
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="absolute top-[42px] right-[0px] w-fit text-sm text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default Input
