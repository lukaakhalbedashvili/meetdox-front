import React, { Dispatch, FC, SetStateAction } from 'react'
import DropDownInput from '@/elements/DropDownInput'
import useTeacherDomain from './useTeacherDomain'
import { DomainNames } from './teacherDomain.interface'
import { BecomeTeacherSections } from '../becomeTeacher.interface'

interface TeacherDomainProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSections>>
}

const TeacherDomain: FC<TeacherDomainProps> = ({
  isFormSubmitted,
  setErroredSections,
}) => {
  const {
    teacherDomainValidation,
    placeholderCategoryValue,
    categoriesData,
    subCategoriesData,
    placeholderSubCategoryValue,
  } = useTeacherDomain(isFormSubmitted, setErroredSections)
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
              teacherDomainValidation.setFieldValue(
                DomainNames.SUB_CATEGORY,
                placeholderSubCategoryValue
              )
            }}
            value={teacherDomainValidation.values.category}
            placeHolderValue={placeholderCategoryValue}
          />
        </div>

        {subCategoriesData && subCategoriesData?.length > 0 && (
          <div className="mt-2 h-10">
            <DropDownInput
              options={subCategoriesData}
              name={DomainNames.SUB_CATEGORY}
              onBlurHandler={teacherDomainValidation.handleBlur}
              errorMessage={
                teacherDomainValidation.touched.subCategory &&
                teacherDomainValidation.errors.subCategory
              }
              onChange={teacherDomainValidation.handleChange}
              value={teacherDomainValidation.values.subCategory}
              placeHolderValue={placeholderSubCategoryValue}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TeacherDomain
