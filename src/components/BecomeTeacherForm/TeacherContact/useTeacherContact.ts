import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { countries } from '@/data/countries'
import { ContactDetails } from '@/components/Catalog/catalog.interface'
import { TeacherContactValidationForm } from './teacherContact.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherContact = (
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  defaultValues?: ContactDetails
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

    onSubmit: async (values) => {
      const { country } = values
      setErroredSections((prevState) => ({
        ...prevState,
        contact: false,
      }))

      setFormValues((state) => {
        return { ...state, contact: { ...values, phoneExtension, country } }
      })
    },
  })

  useEffect(() => {
    defaultValues?.phoneExtension &&
      setPhoneExtension(defaultValues.phoneExtension)

    defaultValues?.phone &&
      teacherContactValidation.setValues({
        country:
          countries.find(
            (item) => item.dial_code === defaultValues?.phoneExtension
          )?.name || 'Georgia',

        phone: defaultValues.phone,
      })
  }, [defaultValues])

  useEffect(() => {
    isFormSubmitted && teacherContactValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return { teacherContactValidation, phoneExtension, updatePhoneExtension }
}

export default useTeacherContact
