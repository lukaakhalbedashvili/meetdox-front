import { useState } from 'react'
import { countries } from '@/data/countries'
import { defaultCountry } from '../data'

const useTeacherContact = () => {
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

  return { phoneExtension, updatePhoneExtension }
}

export default useTeacherContact
