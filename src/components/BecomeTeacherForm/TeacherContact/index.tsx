import React, { Dispatch, FC, SetStateAction } from 'react'
import { countries } from '@/data/countries'
import CountriesDropDown from '@/elements/CountriesDropDown'
import CountriesInput from '@/elements/CountriesInput'
import { ContactDetails } from '@/components/Catalog/catalog.interface'
import { ContactName } from './teacherContact.interface'
import useTeacherContact from './useTeacherContact'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface TeacherContactProps {
  setFormValues: Dispatch<React.SetStateAction<FormValues>>
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  defaultValues?: ContactDetails
}

const TeacherContact: FC<TeacherContactProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
  defaultValues,
}) => {
  const { teacherContactValidation, updatePhoneExtension, phoneExtension } =
    useTeacherContact(
      setFormValues,
      isFormSubmitted,
      setErroredSections,
      defaultValues
    )

  const countriesList = countries.map((country) => {
    return { value: country.name, flag: country.flag }
  })

  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Contact</h2>

      <div className="sm:flex sm:w-1/2 sm:items-center">
        <div className="mt-2 h-10 sm:mr-2 sm:w-2/3">
          <CountriesDropDown
            options={countriesList}
            name={ContactName.COUNTRY}
            onBlurHandler={teacherContactValidation.handleBlur}
            errorMessage={
              teacherContactValidation.touched.country &&
              teacherContactValidation.errors.country
            }
            onChange={(e) => {
              teacherContactValidation.setFieldValue(
                ContactName.COUNTRY,
                e.target.value
              )
              updatePhoneExtension(e.target.value)
            }}
            value={teacherContactValidation.values.country}
          />
        </div>

        <div className="mt-2 h-10 sm:w-full">
          <CountriesInput
            phoneExtension={phoneExtension}
            placeholder={ContactName.PHONE}
            type="number"
            value={teacherContactValidation.values.phone}
            name={ContactName.PHONE}
            onChange={(e) => {
              teacherContactValidation.handleChange(e)
            }}
            onBlurHandler={teacherContactValidation.handleBlur}
            errorMessage={
              teacherContactValidation.touched.phone &&
              teacherContactValidation.errors.phone
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherContact
