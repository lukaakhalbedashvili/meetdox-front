import React, { FC } from 'react'
interface NeoBrutButtonProps {
  children: React.ReactNode
  onClickHandler?: () => void
}

const NeoBrutButton: FC<NeoBrutButtonProps> = ({
  children,
  onClickHandler,
}) => (
  <button
    className="border-black border-2 bg-green-200 text-black rounded-md sm:text-lg neoblutshadow flex items-center justify-center w-full h-full"
    onClick={onClickHandler}
  >
    {children}
  </button>
)

export default NeoBrutButton
