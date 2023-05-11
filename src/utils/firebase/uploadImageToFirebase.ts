import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from 'firebase/storage'

interface HandleUploadProps {
  imageToUpload: Blob
  onSuccessHandler: (downloadURL: string) => void
}

export const uploadImageToFirebase = ({
  imageToUpload,
  onSuccessHandler,
}: HandleUploadProps) => {
  if (!imageToUpload) {
    return 'N'
  }
  const handleSingleFile = (image: File | Blob) => {
    const storage = getStorage()

    const storageRef = ref(storage, `images/${image.name}`)

    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      'state_changed',
      () => {},
      (error) => {
        console.error(error, 'error')
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onSuccessHandler(downloadURL)
        })
      }
    )
  }
  handleSingleFile(imageToUpload)
}
