import { useEffect, useCallback, RefObject } from 'react'

const useOnOutsideClick = (
  refs: (RefObject<HTMLElement> | null)[],
  outsideClickHandler?: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const sumWithInitial = refs.filter((item) =>
        item?.current?.contains(event.target as Node)
      )

      if (sumWithInitial.length === 0 && outsideClickHandler)
        outsideClickHandler()
    },
    [refs, outsideClickHandler]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])
}

export default useOnOutsideClick
