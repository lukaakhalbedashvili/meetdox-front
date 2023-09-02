import { useEffect, useState } from 'react'
import { FormikProps } from 'formik'
import { countries } from '@/data/countries'
import { ContactName } from './teacherContact.interface'
import { defaultCountry } from '../data'
import { BecomeExpertForm } from '../becomeTeacher.interface'

const useTeacherContact = (
  becomeExpertValidation: FormikProps<BecomeExpertForm>
) => {
  const [phoneExtension, setPhoneExtension] = useState<string>(
    countries.find((country) => country.name === defaultCountry)?.dial_code ||
      ''
  )

  const updatePhoneExtension = (country: string) => {
    const phoneExtension =
      countries.find((countryListItem) => countryListItem.name === country)
        ?.dial_code || ''

    setPhoneExtension(phoneExtension)

    becomeExpertValidation.setFieldValue(
      `contact.${ContactName.PHONE_EXTENSION}`,
      phoneExtension
    )
  }

  useEffect(() => {
    updatePhoneExtension(becomeExpertValidation.values.contact.country)
  }, [becomeExpertValidation.values.contact.country])

  return { phoneExtension, updatePhoneExtension }
}

export default useTeacherContact
