import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'
import { BecameTeacherSections } from '../becameTeacher.interface'

const useTeacherPersonalInfo = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
) => {
  const [userImage, setUserImage] = useState<string>()
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >()
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const placeholderBirthMonth = 'Birth month'
  const placeholderBirthYear = 'Birth year'

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
      birthYear: Yup.string()
        .required('required')
        .test('is it valid year', 'required', function (value) {
          return value !== placeholderBirthYear
        }),
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
    isFormSubmitted && teacherPersonalInfoValidation.submitForm()
  }, [isFormSubmitted])

  useEffect(() => {
    setErroredSections((prevState) => ({
      ...prevState,
      personalInfo: !teacherPersonalInfoValidation.isValid,
    }))
  }, [
    teacherPersonalInfoValidation.isValid,
    setErroredSections,
    isFormSubmitted,
  ])

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
