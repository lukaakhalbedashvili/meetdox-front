import React, { FC } from 'react'
import { FormikProps } from 'formik'
import DropDownInput from '@/elements/DropDownInput'
import Checkbox from '@/elements/Checkbox'
import useTeacherDomain from './useTeacherDomain'
import { DomainNames } from './teacherDomain.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'
import { placeholderCategoryValue } from '../data'

interface TeacherDomainProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherDomain: FC<TeacherDomainProps> = ({ becomeExpertValidation }) => {
  const { subCategoriesData, setSubCategoriesData, categoriesData } =
    useTeacherDomain(becomeExpertValidation)

  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <h2 className="text-xl">Domain</h2>

      <div className="sm:w-1/2">
        <div className="mt-2 h-10">
          <DropDownInput
            options={categoriesData}
            name={DomainNames.CATEGORY}
            onBlurHandler={becomeExpertValidation.handleBlur}
            errorMessage={
              becomeExpertValidation.touched.domain?.category &&
              becomeExpertValidation.errors.domain?.category
            }
            onChange={(e) => {
              becomeExpertValidation.setFieldValue(
                `domain.${DomainNames.CATEGORY}`,
                e.target.value
              )

              becomeExpertValidation.setFieldValue(
                `${DomainNames.DOMAIN}.${DomainNames.SUB_CATEGORY}`,
                []
              )
            }}
            value={becomeExpertValidation.values.domain.category}
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

                becomeExpertValidation.setFieldValue(
                  `${DomainNames.DOMAIN}.${DomainNames.SUB_CATEGORY}`,
                  [
                    ...becomeExpertValidation.values.domain.subCategories,
                    ...subCategoriesData
                      .filter((item2) => item2.name === item.name)
                      .map((item3) => item3.name),
                  ]
                )
              }}
            >
              <Checkbox
                id={item.name}
                isChecked={item.checked}
                onChange={(id) => {
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
                }}
              />

              <p className="ml-4">{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TeacherDomain
