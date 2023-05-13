import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from 'firebase/storage'

interface HandleUploadProps {
  userId: string
  imageToUpload: Blob
  onSuccessHandler: (downloadURL: string) => void
}

export const uploadImageToFirebase = ({
  imageToUpload,
  onSuccessHandler,
  userId,
}: HandleUploadProps) => {
  if (!imageToUpload) {
    return 'N'
  }

  const storage = getStorage()

  const storageRef = ref(storage, `images/${userId}`)

  const uploadTask = uploadBytesResumable(storageRef, imageToUpload)

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
