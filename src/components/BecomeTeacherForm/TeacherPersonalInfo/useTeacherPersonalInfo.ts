import { useRef, useState } from 'react'
import { useZustandStore } from '@/zustand'

const useTeacherPersonalInfo = () => {
  const { loggedInUser } = useZustandStore()
  const [userImage, setUserImage] = useState<string>()

  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >()

  const [isImageError, setIsImageError] = useState<boolean>(false)

  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = (image: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)

    reader.onloadend = () => {
      setUploadedImage(reader.result)
    }
  }

  return {
    isUploadImageModalOpen,
    setIsUploadImageModalOpen,
    userImage,
    setUserImage,
    handleUpload,
    uploadedImage,
    fileInputRef,
    setUploadedImage,
    isImageError,
    loggedInUser,
    setIsImageError,
  }
}

export default useTeacherPersonalInfo
