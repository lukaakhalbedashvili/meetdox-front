import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TeacherEducationInfoValidationForm } from './teacherEducation.interface'
const useTeacherEducation = () => {
  const validationSchema: Yup.ObjectSchema<TeacherEducationInfoValidationForm> =
    Yup.object({
      university: Yup.string().required('required'),
      major: Yup.string().required('required'),
      startDate: Yup.string().required('required'),
      endDate: Yup.string().required('required'),
    })

  const teacherEducationInfoValidation =
    useFormik<TeacherEducationInfoValidationForm>({
      initialValues: {
        university: '',
        major: '',
        startDate: '',
        endDate: '',
      },

      validationSchema,

      onSubmit: async () => {},
    })
  return { teacherEducationInfoValidation }
}

export default useTeacherEducation
