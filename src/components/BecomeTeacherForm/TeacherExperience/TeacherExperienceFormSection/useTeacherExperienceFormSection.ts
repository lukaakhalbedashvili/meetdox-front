import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as Yup from 'yup'
import { TeacherExperienceForm } from './teacherExperience.interface'
import {
  BecomeTeacherSections,
  FormValues,
} from '../../becomeTeacher.interface'

const useTeacherEducation = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSections>>,
  formId: number,
  setFormValues: Dispatch<SetStateAction<FormValues>>
) => {
  const placeholderStartDate = 'Start date'
  const placeholderEndDate = 'End date'

  const validationSchema: Yup.ObjectSchema<TeacherExperienceForm> = Yup.object({
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
    id: Yup.number().required(),
  })

  const teacherExperienceValidation = useFormik<TeacherExperienceForm>({
    initialValues: {
      id: 0,
      company: '',
      position: '',
      description: '',
      startDate: placeholderStartDate,
      endDate: placeholderEndDate,
    },

    validationSchema,

    onSubmit: async (values) => {
      setErroredSections((prevState) => ({
        ...prevState,
        experience: !teacherExperienceValidation.isValid,
      }))

      setFormValues((state) => {
        const returnOtherInCaseOf = state.teacherExperience.filter(
          (item) => item.id !== formId
        )
        return {
          ...state,
          teacherExperience: [
            ...returnOtherInCaseOf,
            { ...values, id: formId },
          ],
        }
      })
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
