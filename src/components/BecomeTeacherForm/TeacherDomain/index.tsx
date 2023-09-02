import React, { FC } from 'react'
import { FormikProps } from 'formik'
import DropDownInput from '@/elements/DropDownInput'
import Checkbox from '@/elements/Checkbox'
import useTeacherDomain from './useTeacherDomain'
import { DomainNames } from './teacherDomain.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'
import { placeholderCategoryValue } from '../data'
import { TeacherSkillsInputNames } from '../TeacherSkills/teacherSkills.interface'

interface TeacherDomainProps {
  becomeExpertValidation: FormikProps<BecomeExpertForm>
}

const TeacherDomain: FC<TeacherDomainProps> = ({ becomeExpertValidation }) => {
  const { subCategoriesData, setSubCategoriesData, categoriesData } =
    useTeacherDomain(becomeExpertValidation)

  return (
    <div className="mx-4 mt-5  border-t-[1px] border-border_gray pt-5 sm:mx-12">
      <div className="flex items-center">
        <h2 className="text-xl">Category</h2>

        {becomeExpertValidation.errors.domain?.subCategories && (
          <p className="ml-5 text-base text-error">
            {becomeExpertValidation.errors.domain?.subCategories}
          </p>
        )}
      </div>
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
                TeacherSkillsInputNames.SKILLS,
                []
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

                if (
                  !becomeExpertValidation.values.domain.subCategories.includes(
                    item.name
                  )
                ) {
                  becomeExpertValidation.setFieldValue(
                    `${DomainNames.DOMAIN}.${DomainNames.SUB_CATEGORY}`,

                    subCategoriesData
                      .filter((subCat) =>
                        item === subCat ? !item.checked : subCat.checked
                      )
                      .map((item3) => item3.name)
                  )
                } else {
                  becomeExpertValidation.setFieldValue(
                    `${DomainNames.DOMAIN}.${DomainNames.SUB_CATEGORY}`,

                    becomeExpertValidation.values.domain.subCategories.filter(
                      (subCat) => item.name !== subCat
                    )
                  )
                }
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
