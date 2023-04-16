import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TeacherPersonalInfoForm } from './teacherPersonalInfo.interface'

const useTeacherPersonalInfo = () => {
  const validationSchema: Yup.ObjectSchema<TeacherPersonalInfoForm> =
    Yup.object({
      name: Yup.string().required('required'),
      middleName: Yup.string().required('required'),
      lastName: Yup.string().required('required'),
      birthMonth: Yup.string().required('required'),
      birthYear: Yup.string().required('required'),
    })

  const teacherPersonalInfoValidation = useFormik<TeacherPersonalInfoForm>({
    initialValues: {
      birthMonth: '',
      birthYear: '',
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
  return { teacherPersonalInfoValidation }
}

export default useTeacherPersonalInfo
