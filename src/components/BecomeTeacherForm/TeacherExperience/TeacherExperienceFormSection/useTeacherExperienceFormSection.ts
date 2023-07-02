import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as Yup from 'yup'
import { TeacherExperience as TeacherExpType } from '@/components/Catalog/catalog.interface'
import { TeacherExperienceForm } from './teacherExperience.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../../becomeTeacher.interface'

const useTeacherEducation = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  formId: number,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  defaultValue?: TeacherExpType
) => {
  const CurrentlyJob = 'Currently Job'
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
        experience: false,
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

  useEffect(() => {
    defaultValue &&
      teacherExperienceValidation.setValues({
        company: defaultValue.company,
        position: defaultValue.position,
        description: defaultValue.description,
        startDate: defaultValue.startDate,
        endDate: defaultValue.endDate,
        id: defaultValue.id,
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  return {
    teacherExperienceValidation,
    placeholderStartDate,
    placeholderEndDate,
    CurrentlyJob,
  }
}

export default useTeacherEducation
