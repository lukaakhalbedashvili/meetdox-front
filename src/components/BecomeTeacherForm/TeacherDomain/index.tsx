import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import { Domain } from '@/components/Catalog/catalog.interface'
import Checkbox from '@/elements/Checkbox'
import useTeacherDomain from './useTeacherDomain'
import { DomainNames } from './teacherDomain.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface TeacherDomainProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
  defaultValue?: Domain
}

const TeacherDomain: FC<TeacherDomainProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
  defaultValue,
}) => {
  const {
    teacherDomainValidation,
    placeholderCategoryValue,
    categoriesData,
    subCategoriesData,
    setSubCategoriesData,
    isDomainFormSubmitted,
  } = useTeacherDomain(
    isFormSubmitted,
    setErroredSections,
    setFormValues,
    defaultValue
  )
  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Domain</h2>

      {subCategoriesData
        ?.filter((item) => item.checked)
        .map((item) => item.name).length === 0 &&
        isDomainFormSubmitted && (
          <p className="text-sm text-error">
            you should select at least 1 subdomain
          </p>
        )}

      <div className="sm:w-1/2">
        <div className="mt-2 h-10">
          <DropDownInput
            options={categoriesData}
            name={DomainNames.CATEGORY}
            onBlurHandler={teacherDomainValidation.handleBlur}
            errorMessage={
              teacherDomainValidation.touched.category &&
              teacherDomainValidation.errors.category
            }
            onChange={(e) => {
              teacherDomainValidation.setFieldValue(
                DomainNames.CATEGORY,
                e.target.value
              )

              setFormValues((prevState): FormValues => {
                return {
                  ...prevState,
                  domain: {
                    ...prevState.domain,
                    category: e.target.value,
                  },
                }
              })
            }}
            value={teacherDomainValidation.values.category}
            placeHolderValue={placeholderCategoryValue}
          />
        </div>

        {subCategoriesData &&
          subCategoriesData?.length > 0 &&
          subCategoriesData.map((item) => (
            <div
              className="mt-2 flex h-10 cursor-pointer items-center rounded-md pl-2 hover:bg-border_gray"
              key={item.name}
              onClick={() => {
                setSubCategoriesData(
                  subCategoriesData.map((item2) => {
                    return {
                      ...item2,
                      checked: item === item2 ? !item.checked : item2.checked,
                    }
                  })
                )
              }}
            >
              <Checkbox
                id={item.name}
                isChecked={item.checked}
                onChange={(id) =>
                  setSubCategoriesData(
                    subCategoriesData.map((item) => {
                      if (item.name === id) {
                        return {
                          ...item,
                          checked: !item.checked,
                        }
                      }
                      return item
                    })
                  )
                }
              />

              <p className="ml-4">{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TeacherDomain
