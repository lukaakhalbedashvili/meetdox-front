import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TeacherPersonalInfoFormInputs } from './teacherPersonalInfo.interface'

const useTeacherPersonalInfo = () => {
  const teacherPersonalInfoValidation = useFormik({
    initialValues: {
      [TeacherPersonalInfoFormInputs.NAME]: '',
      [TeacherPersonalInfoFormInputs.MIDDLE_NAME]: '',
      [TeacherPersonalInfoFormInputs.LAST_NAME]: '',
      [TeacherPersonalInfoFormInputs.BIRTH_YEAR]: '',
      [TeacherPersonalInfoFormInputs.BIRTH_MONTH]: '',
    },

    validationSchema: Yup.object({
      [TeacherPersonalInfoFormInputs.NAME]: Yup.string()
        .max(35, 'must be less than 35')
        .min(3, 'must be more than 2')
        .matches(/^[a-zA-Z0-9]+$/, 'only letters and numbers')
        .required('required'),

      [TeacherPersonalInfoFormInputs.MIDDLE_NAME]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),

      [TeacherPersonalInfoFormInputs.LAST_NAME]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .oneOf([Yup.ref('password')], 'passwords must match')
        .required('required'),

      [TeacherPersonalInfoFormInputs.BIRTH_MONTH]:
        Yup.string().required('required'),

      [TeacherPersonalInfoFormInputs.BIRTH_YEAR]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .oneOf([Yup.ref('password')], 'passwords must match')
        .required('required'),
    }),

    onSubmit: async (values) => {
      const { lastName, middleName, name, birthYear, birthMonth } = values
      console.error(birthYear, birthMonth, lastName, middleName, name)
    },
  })
  return { teacherPersonalInfoValidation }
}

export default useTeacherPersonalInfo
