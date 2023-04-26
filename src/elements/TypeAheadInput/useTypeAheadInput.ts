import { useRef, useState } from 'react'
import useOnOutsideClick from '@/hooks/useDetectOutsideClick'

const useTypeAheadInput = () => {
  const inputRef = useRef(null)
  const resultsRef = useRef(null)
  const [isDownOpen, setIsDownOpen] = useState(true)

  useOnOutsideClick([inputRef, resultsRef], () => setIsDownOpen(false))
  return { resultsRef, isDownOpen, setIsDownOpen, inputRef }
}

export default useTypeAheadInput
