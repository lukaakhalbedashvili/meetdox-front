import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { categories } from '@/data/categoryItems'
import { TeacherDomainInfoValidationForm } from './teacherDomain.interface'
import { BecameTeacherSections } from '../becameTeacher.interface'

const useTeacherDomain = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
) => {
  const placeholderCategoryValue = 'Choose Category'

  const placeholderSubCategoryValue = 'Choose SubCategory'

  const validationSchema: Yup.ObjectSchema<TeacherDomainInfoValidationForm> =
    Yup.object({
      category: Yup.string()
        .required('required')
        .test('is it valid category', 'required', function (value) {
          return value !== placeholderCategoryValue
        }),
      subCategory: Yup.string()
        .required('required')
        .test('is it valid sub sub-category', 'required', function (value) {
          return value !== placeholderSubCategoryValue
        }),
    })

  const teacherDomainValidation = useFormik<TeacherDomainInfoValidationForm>({
    initialValues: {
      category: placeholderCategoryValue,
      subCategory: placeholderSubCategoryValue,
    },

    validationSchema,

    onSubmit: async () => {
      setErroredSections((prevState) => ({
        ...prevState,
        domain: !teacherDomainValidation.isValid,
      }))
    },
  })

  const categoriesData = categories.map((item) => item.name)

  const subCategoriesData = categories
    .find((item) => item.name === teacherDomainValidation.values.category)
    ?.subCategories.map((item) => item.name)

  useEffect(() => {
    isFormSubmitted && teacherDomainValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return {
    teacherDomainValidation,
    placeholderCategoryValue,
    categoriesData,
    subCategoriesData,
    placeholderSubCategoryValue,
  }
}

export default useTeacherDomain
