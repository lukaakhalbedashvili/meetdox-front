import React, { FC, useRef } from 'react'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'

interface PopupItemWrapperPros {
  children: React.ReactNode
  onOutsideClickHandler: () => void
}

const PopupItemWrapper: FC<PopupItemWrapperPros> = ({
  children,
  onOutsideClickHandler,
}) => {
  const childrenWrapperRef = useRef<HTMLDivElement>(null)
  useOnOutsideClick([childrenWrapperRef], onOutsideClickHandler)

  return (
    <div className="w-screen absolute top-0 h-full bg-text_gray bg-opacity-70 flex items-center justify-center z-10">
      <div ref={childrenWrapperRef}>{children}</div>
    </div>
  )
}

export default PopupItemWrapper
