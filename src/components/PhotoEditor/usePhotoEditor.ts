import React, { useCallback, useEffect, useState } from 'react'
import { Area } from 'react-easy-crop'

const usePhotoEditor = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1.2)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>()
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >()

  const onCropComplete = useCallback((croppedArea: Area, cropArea: Area) => {
    setCroppedAreaPixels(cropArea)
  }, [])

  const handleUpload = (images: FileList) => {
    const imageAsBase64 = (image: File) => {
      const reader = new FileReader()
      reader.readAsDataURL(image)

      reader.onloadend = function () {
        setUploadedImage(reader.result)
      }
    }
    Object.values(images).map((item) => imageAsBase64(item))
  }

  useEffect(() => {
    fileInputRef.current?.click()
  }, [])

  return {
    handleUpload,
    onCropComplete,
    crop,
    zoom,
    setCrop,
    setZoom,
    uploadedImage,
    fileInputRef,
    croppedAreaPixels,
  }
}

export default usePhotoEditor
