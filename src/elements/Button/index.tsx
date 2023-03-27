import React, { FC } from 'react'
interface ButtonProps {
  children: React.ReactNode
  onClickHandler?: () => void
  bgColor?: string
  textColor?: string
  borderColor?: string
}

const Button: FC<ButtonProps> = ({
  children,
  onClickHandler,
  bgColor = 'white',
  textColor = 'black',
  borderColor = 'black',
}) => (
  <button
    className={`text-${textColor} bg-${bgColor} border-${borderColor} border-2 rounded-md sm:text-xl flex items-center justify-center`}
    style={{ borderColor }}
    onClick={onClickHandler}
  >
    {children}
  </button>
)

export default Button
