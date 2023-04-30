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
    <div className="align-center relative flex h-full w-full justify-center rounded-md border-2 border-border_gray">
      <textarea
        className="h-full w-full resize-none rounded-md bg-white pl-5 pt-2 text-sm"
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
      <div className="absolute top-[42px] right-[0px] w-fit text-sm text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default TextArea
