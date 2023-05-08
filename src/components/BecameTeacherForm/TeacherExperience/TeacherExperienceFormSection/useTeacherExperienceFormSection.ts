import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as Yup from 'yup'
import { TeacherEducationInfoValidationForm } from './teacherExperience.interface'
import { BecameTeacherSections } from '../../becameTeacher.interface'

const useTeacherEducation = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
) => {
  const placeholderStartDate = 'Start date'
  const placeholderEndDate = 'End date'

  const validationSchema: Yup.ObjectSchema<TeacherEducationInfoValidationForm> =
    Yup.object({
      company: Yup.string().required('required').min(2),
      position: Yup.string().required('required'),
      description: Yup.string().required('required'),
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

      onSubmit: async () => {
        setErroredSections((prevState) => ({
          ...prevState,
          experience: !teacherExperienceValidation.isValid,
        }))
      },
    })

  useEffect(() => {
    isFormSubmitted && teacherExperienceValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return {
    teacherExperienceValidation,
    placeholderStartDate,
    placeholderEndDate,
  }
}

export default useTeacherEducation
