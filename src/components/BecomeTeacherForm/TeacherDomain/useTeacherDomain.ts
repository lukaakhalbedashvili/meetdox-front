import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Domain } from '@/components/Catalog/catalog.interface'
import { categories } from '@/data/categoryItems'
import { TeacherDomainInfoValidationForm } from './teacherDomain.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherDomain = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  defaultValue?: Domain
) => {
  const placeholderCategoryValue = 'Choose Category'

  const [isDomainFormSubmitted, setIsDomainFormSubmitted] = useState(false)

  const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>([])

  interface SubCategory {
    name: string
    checked: boolean
  }

  const validationSchema: Yup.ObjectSchema<TeacherDomainInfoValidationForm> =
    Yup.object({
      category: Yup.string().required('required'),
      subCategories: Yup.array().required('required'),
    })

  const teacherDomainValidation = useFormik<TeacherDomainInfoValidationForm>({
    initialValues: {
      category: placeholderCategoryValue,
      subCategories: [],
    },

    validationSchema,

    onSubmit: async (values) => {
      setIsDomainFormSubmitted(true)
      const { category } = values
      setErroredSections((prevState) => ({
        ...prevState,
        domain: false,
      }))

      setFormValues((prevState): FormValues => {
        return {
          ...prevState,
          domain: {
            ...prevState.domain,
            category: category,
            subCategories: subCategoriesData
              ?.filter((item) => item.checked)
              .map((item) => item.name),
          },
        }
      })
    },
  })

  const categoriesData = categories.map((item) => item.name)

  useEffect(() => {
    setSubCategoriesData(
      categories
        .find((item) => item.name === teacherDomainValidation.values.category)
        ?.subCategories.map((item) => {
          return {
            name: item.name,
            checked: defaultValue?.subCategories.includes(item.name) || false,
          }
        }) || []
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherDomainValidation.values.category, defaultValue])

  useEffect(() => {
    defaultValue &&
      teacherDomainValidation.setValues({
        category: defaultValue.category,
        subCategories: defaultValue.subCategories,
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  useEffect(() => {
    isFormSubmitted && teacherDomainValidation.submitForm()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return {
    teacherDomainValidation,
    placeholderCategoryValue,
    categoriesData,
    subCategoriesData,
    setSubCategoriesData,
    isDomainFormSubmitted,
  }
}

export default useTeacherDomain
