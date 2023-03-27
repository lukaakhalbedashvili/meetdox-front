import React, { FC } from 'react'
interface ButtonProps {
  children: React.ReactNode
  onClickHandler?: () => void
  customTailwindClasses?: string
}

const Button: FC<ButtonProps> = ({
  children,
  onClickHandler,
  customTailwindClasses = 'bg-white text-black border-black',
}) => (
  <button
    className={`border-2 rounded-md sm:text-sm flex items-center justify-center ${customTailwindClasses}`}
    onClick={onClickHandler}
  >
    {children}
  </button>
)

export default Button
