import React, { FC, MouseEvent } from 'react'
interface ButtonProps {
  children: React.ReactNode
  onClickHandler?: (e: MouseEvent<HTMLElement>) => void
  type?: 'button' | 'submit' | 'reset'
  customTailwindClasses?: string
  isDisabled?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  onClickHandler,
  type = 'button',
  customTailwindClasses = 'bg-white text-text_gray border-text_gray',
  isDisabled = false,
}) => (
  <button
    type={type}
    className={`flex items-center justify-center rounded-md border-2 sm:text-sm ${customTailwindClasses} ${
      isDisabled && 'border-none bg-opacity-50'
    }`}
    onClick={(e) => !isDisabled && onClickHandler && onClickHandler(e)}
  >
    {children}
  </button>
)

export default Button
