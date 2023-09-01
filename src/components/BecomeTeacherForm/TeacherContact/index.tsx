import React, { FC } from 'react'
import { FormikProps } from 'formik'
import { countries } from '@/data/countries'
import CountriesDropDown from '@/elements/CountriesDropDown'
import CountriesInput from '@/elements/CountriesInput'
import { ContactName } from './teacherContact.interface'
import useTeacherContact from './useTeacherContact'
import { BecomeExpertForm } from '../becomeTeacher.interface'

interface TeacherContactProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherContact: FC<TeacherContactProps> = ({
  becomeExpertValidation,
}) => {
  const { updatePhoneExtension, phoneExtension } = useTeacherContact()

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
            name={`contact.${ContactName.COUNTRY}`}
            onBlurHandler={becomeExpertValidation.handleBlur}
            errorMessage={
              becomeExpertValidation.touched.contact?.country &&
              becomeExpertValidation.errors.contact?.country
            }
            onChange={(e) => {
              becomeExpertValidation.setFieldValue(
                `contact.${ContactName.COUNTRY}`,
                e.target.value
              )
              updatePhoneExtension(e.target.value)
            }}
            value={becomeExpertValidation.values.contact.country}
          />
        </div>

        <div className="mt-2 h-10 sm:w-full">
          <CountriesInput
            phoneExtension={phoneExtension}
            name={`contact.${ContactName.PHONE}`}
            type="number"
            value={becomeExpertValidation.values.contact.phone}
            placeholder={ContactName.PHONE}
            onChange={becomeExpertValidation.handleChange}
            onBlurHandler={becomeExpertValidation.handleBlur}
            errorMessage={
              becomeExpertValidation.touched.contact?.phone &&
              becomeExpertValidation.errors.contact?.phone
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherContact
