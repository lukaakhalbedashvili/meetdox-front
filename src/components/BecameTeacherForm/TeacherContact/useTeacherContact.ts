import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { countries } from '@/data/countries'
import { TeacherContactValidationForm } from './teacherContact.interface'
import { BecameTeacherSections } from '../becameTeacher.interface'

const useTeacherContact = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
) => {
  const defaultCountry = 'Georgia'

  const [phoneExtension, setPhoneExtension] = useState<string>(
    countries.find((country) => country.name === defaultCountry)?.dial_code ||
      ''
  )

  const updatePhoneExtension = (country: string) => {
    setPhoneExtension(
      countries.find((countryListItem) => countryListItem.name === country)
        ?.dial_code || ''
    )
  }

  const validationSchema: Yup.ObjectSchema<TeacherContactValidationForm> =
    Yup.object({
      phone: Yup.string().required('required'),
      country: Yup.string().required('required'),
    })

  const teacherContactValidation = useFormik<TeacherContactValidationForm>({
    initialValues: {
      phone: '',
      country: defaultCountry,
    },

    validationSchema,

    onSubmit: async () => {
      setErroredSections((prevState) => ({
        ...prevState,
        contact: !teacherContactValidation.isValid,
      }))
    },
  })

  useEffect(() => {
    isFormSubmitted && teacherContactValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return { teacherContactValidation, phoneExtension, updatePhoneExtension }
}

export default useTeacherContact
