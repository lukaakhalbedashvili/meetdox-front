import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
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
}

const TeacherDomain: FC<TeacherDomainProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
}) => {
  const {
    teacherDomainValidation,
    placeholderCategoryValue,
    categoriesData,
    subCategoriesData,
    setSubCategoriesData,
  } = useTeacherDomain(isFormSubmitted, setErroredSections, setFormValues)
  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Domain</h2>

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
                  teacherDomain: {
                    ...prevState.teacherDomain,
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
