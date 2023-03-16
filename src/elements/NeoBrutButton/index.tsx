import React, { FC } from 'react'
interface NeoBrutButtonProps {
  children: React.ReactNode
}

const NeoBrutButton: FC<NeoBrutButtonProps> = ({ children }) => (
  <button className="border-black border-2 bg-green-200 text-black rounded-md sm:text-lg neoblutshadow flex items-center justify-center">
    {children}
  </button>
)

export default NeoBrutButton
