import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as Yup from 'yup'
import { AboutTeacherForm } from './AboutTeacher.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface UseAboutProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
}

const useAboutTeacher = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
}: UseAboutProps) => {
  const validationSchema: Yup.ObjectSchema<AboutTeacherForm> = Yup.object({
    description: Yup.string().required('required'),
  })

  const aboutTeacherValidation = useFormik<AboutTeacherForm>({
    initialValues: {
      description: '',
    },

    validationSchema,

    onSubmit: async () => {
      setErroredSections((prevState) => ({
        ...prevState,
        experience: false,
      }))

      setFormValues((prevState): FormValues => {
        return {
          ...prevState,
          about: {
            ...prevState.about,
            description: aboutTeacherValidation.values.description,
          },
        }
      })
    },
  })
  useEffect(() => {
    isFormSubmitted && aboutTeacherValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])
  return { aboutTeacherValidation }
}

export default useAboutTeacher
