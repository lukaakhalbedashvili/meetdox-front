import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { PersonalDetails } from '@/components/Catalog/catalog.interface'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherPersonalInfo = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  defaultValues?: { data?: PersonalDetails; image?: string }
) => {
  const { data } = useFetchLoggedInUserData()

  const [userImage, setUserImage] = useState<string>()

  useEffect(() => {
    defaultValues?.image && setUserImage(defaultValues?.image)
  }, [defaultValues?.image])

  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >()

  const [imageFromFirebase, setImageFromFirebase] = useState<string>()

  const [isImageError, setIsImageError] = useState<boolean>(false)

  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const placeholderBirthMonth = 'Birth month'

  const placeholderBirthYear = 'Birth year'

  const validationSchema: Yup.ObjectSchema<TeacherPersonalInfoForm> =
    Yup.object({
      name: Yup.string().required('required'),
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
      lastName: defaultValues?.data?.lastName || '',
      name: '',
    },

    validationSchema,

    onSubmit: async (values) => {
      setErroredSections((prevState) => ({
        ...prevState,
        personalDetails: false,
      }))

      setFormValues((state): FormValues => {
        return {
          ...state,
          personalDetails: { ...values, image: imageFromFirebase },
        }
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
    teacherPersonalInfoValidation.setValues({
      birthMonth: defaultValues?.data?.birthMonth || placeholderBirthMonth,
      birthYear: defaultValues?.data?.birthYear || placeholderBirthYear,
      lastName: defaultValues?.data?.lastName || '',
      name: defaultValues?.data?.name || '',
    })
    setImageFromFirebase(defaultValues?.image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues])

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
    userId: data?.data.data.uid,
    setImageFromFirebase,
  }
}

export default useTeacherPersonalInfo
