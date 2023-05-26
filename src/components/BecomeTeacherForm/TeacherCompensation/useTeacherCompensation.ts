import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as Yup from 'yup'
import { TeacherCompensationFields } from './teacherCompensation.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherCompensation = (
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
) => {
  const validationSchema: Yup.ObjectSchema<TeacherCompensationFields> =
    Yup.object({
      perHour: Yup.string().required('required'),
    })

  const teacherCompensationValidation = useFormik<TeacherCompensationFields>({
    initialValues: {
      perHour: '',
    },

    validationSchema,

    onSubmit: async (values) => {
      const { perHour } = values
      setErroredSections((prevState) => ({
        ...prevState,
        contact: false,
      }))

      setFormValues((state): FormValues => {
        return { ...state, perHour }
      })
    },
  })

  useEffect(() => {
    isFormSubmitted && teacherCompensationValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return { teacherCompensationValidation }
}

export default useTeacherCompensation
