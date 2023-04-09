import { useEffect, useCallback, RefObject } from 'react'

const useOnOutsideClick = (
  ref: RefObject<HTMLDivElement> | null,
  outsideClickHandler: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        outsideClickHandler()
      }
    },
    [ref, outsideClickHandler]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])
}

export default useOnOutsideClick
