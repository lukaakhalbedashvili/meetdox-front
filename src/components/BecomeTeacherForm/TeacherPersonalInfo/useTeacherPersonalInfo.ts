import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'
import { BecomeTeacherSections, FormValues } from '../becomeTeacher.interface'

const useTeacherPersonalInfo = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSections>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>
) => {
  const [userImage, setUserImage] = useState<string>()
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >()
  const [isImageError, setIsImageError] = useState<boolean>(false)
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
      image: Yup.string(),
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

    onSubmit: async (values) => {
      setErroredSections((prevState) => ({
        ...prevState,
        personalInfo: !teacherPersonalInfoValidation.isValid,
      }))

      setFormValues((state) => {
        return { ...state, personalInfo: values }
      })
    },
  })

  const handleUpload = (image: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)

    reader.onloadend = () => {
      setUploadedImage(reader.result)
    }
  }

  useEffect(() => {
    isFormSubmitted && teacherPersonalInfoValidation.submitForm()
    isFormSubmitted && !userImage && setIsImageError(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted, userImage])

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
    isImageError,
  }
}

export default useTeacherPersonalInfo
