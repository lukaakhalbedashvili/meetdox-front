import { useCallback, useState } from 'react'
import { Area } from 'react-easy-crop'

const usePhotoEditor = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1.2)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>()

  const onCropComplete = useCallback((croppedArea: Area, cropArea: Area) => {
    setCroppedAreaPixels(cropArea)
  }, [])

  return {
    onCropComplete,
    crop,
    zoom,
    setCrop,
    setZoom,
    croppedAreaPixels,
  }
}

export default usePhotoEditor
