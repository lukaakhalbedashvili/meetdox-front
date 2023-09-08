import React, { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return isMounted ? (
    createPortal(
      <div className="fixed top-0 z-40 flex h-screen w-screen items-center justify-center md:bg-opacity-50">
        <div
          ref={childrenWrapperRef}
          className="h-screen w-screen lg:h-fit lg:w-fit "
        >
          {children}
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  )
}

export default PopupItemWrapper
