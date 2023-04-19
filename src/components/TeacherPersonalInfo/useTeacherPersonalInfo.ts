import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'

const useTeacherPersonalInfo = () => {
  const placeholderBirthMonth = 'Birth month'
  const placeholderBirthYear = 'Birth year'
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false)
  const [userImage, setUserImage] = useState<string>()

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

    onSubmit: async (values) => {
      const { lastName, middleName, name, birthYear, birthMonth } = values
      console.error(birthYear, birthMonth, lastName, middleName, name)
    },
  })
  return {
    teacherPersonalInfoValidation,
    placeholderBirthMonth,
    placeholderBirthYear,
    isUploadImageModalOpen,
    setIsUploadImageModalOpen,
    userImage,
    setUserImage,
  }
}

export default useTeacherPersonalInfo
