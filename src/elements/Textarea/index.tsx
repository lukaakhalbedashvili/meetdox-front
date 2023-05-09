import React, { FC, ReactNode } from 'react'

interface InputProps {
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  errorMessage?: string | undefined | false
  name: string
  onBlurHandler?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  children?: ReactNode
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<InputProps> = ({
  value,
  errorMessage,
  name,
  onBlurHandler,
  onChange,
  placeholder,
  onFocus,
}) => {
  return (
    <div
      className={`${
        errorMessage
          ? 'border border-error_icon_red'
          : 'border-2 border-border_gray'
      } align-center relative flex h-full w-full justify-center rounded-md border border-border_gray`}
    >
      <textarea
        className="h-full w-full resize-none rounded-md bg-white pl-5 pt-2 text-sm outline-none"
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
      <div className="absolute -bottom-2 right-2 w-fit bg-white px-1 text-sm text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default TextArea
