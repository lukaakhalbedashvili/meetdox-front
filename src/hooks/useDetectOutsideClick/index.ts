import { useEffect, useCallback, useState, RefObject } from 'react'

const useOnOutsideClick = (ref: RefObject<HTMLDivElement> | null) => {
  const [isOutsideClick, setIsOutsideClick] = useState(false)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        setIsOutsideClick(true)
      }
    },
    [ref]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])

  return { isOutsideClick }
}

export default useOnOutsideClick
