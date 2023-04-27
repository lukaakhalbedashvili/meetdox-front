import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TeacherEducationInfoValidationForm } from './teacherExperience.interface'

const useTeacherEducation = () => {
  const placeholderStartDate = 'Start date'
  const placeholderEndDate = 'End date'

  const validationSchema: Yup.ObjectSchema<TeacherEducationInfoValidationForm> =
    Yup.object({
      company: Yup.string().required('required'),
      position: Yup.string().required('required'),
      description: Yup.string(),
      startDate: Yup.string()
        .required('required')
        .test('is it valid month', 'required', function (value) {
          return value !== placeholderStartDate
        }),
      endDate: Yup.string()
        .required('required')
        .test('is it valid month', 'required', function (value) {
          return value !== placeholderEndDate
        }),
    })

  const teacherExperienceValidation =
    useFormik<TeacherEducationInfoValidationForm>({
      initialValues: {
        company: '',
        position: '',
        description: '',
        startDate: placeholderStartDate,
        endDate: placeholderEndDate,
      },

      validationSchema,

      onSubmit: async () => {},
    })

  return {
    teacherExperienceValidation,
    placeholderStartDate,
    placeholderEndDate,
  }
}

export default useTeacherEducation
