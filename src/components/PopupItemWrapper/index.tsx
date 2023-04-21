import React, { FC, useEffect, useRef } from 'react'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'

interface PopupItemWrapperPros {
  children: React.ReactNode
  onOutsideClickHandler?: () => void
}

const PopupItemWrapper: FC<PopupItemWrapperPros> = ({
  children,
  onOutsideClickHandler,
}) => {
  const childrenWrapperRef = useRef<HTMLDivElement>(null)

  useOnOutsideClick([childrenWrapperRef], onOutsideClickHandler)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="absolute top-0 z-20 flex h-screen w-screen items-center justify-center bg-black md:bg-opacity-50">
      {children}
    </div>
  )
}

export default PopupItemWrapper
