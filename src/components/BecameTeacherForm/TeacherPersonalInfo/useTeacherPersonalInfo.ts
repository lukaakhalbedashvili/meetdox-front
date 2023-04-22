import { useFormik } from 'formik'
import { useContext, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'
import { becameTeacherContext } from '../../BecomeTeacherContext'

const useTeacherPersonalInfo = () => {
  const { setSectionsWhereErrorHappened } = useContext(becameTeacherContext)
  const placeholderBirthMonth = 'Birth month'
  const placeholderBirthYear = 'Birth year'
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false)
  const [userImage, setUserImage] = useState<string>()
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validationSchema: Yup.ObjectSchema<TeacherPersonalInfoForm> =
    Yup.object({
      name: Yup.string().required('required'),
      middleName: Yup.string(),
      lastName: Yup.string().required('required'),
      birthMonth: Yup.string()
        .required('required')
        .test('is it valid month', 'required', function (value) {
          return value !== placeholderBirthMonth
        }),
      birthYear: Yup.string().required('required'),
    })

  const teacherPersonalInfoValidation = useFormik<TeacherPersonalInfoForm>({
    initialValues: {
      birthMonth: placeholderBirthMonth,
      birthYear: placeholderBirthYear,
      lastName: '',
      middleName: '',
      name: '',
    },

    validationSchema,

    onSubmit: async () => {},
  })

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
    const isThereError =
      Object.values(teacherPersonalInfoValidation.errors).length > 0

    setSectionsWhereErrorHappened &&
      setSectionsWhereErrorHappened((prevState) => {
        return { ...prevState, personalData: isThereError }
      })
  }, [teacherPersonalInfoValidation.errors, setSectionsWhereErrorHappened])

  return {
    teacherPersonalInfoValidation,
    placeholderBirthMonth,
    placeholderBirthYear,
    isUploadImageModalOpen,
    setIsUploadImageModalOpen,
    userImage,
    setUserImage,
    handleUpload,
    uploadedImage,
    fileInputRef,
    setUploadedImage,
  }
}

export default useTeacherPersonalInfo
