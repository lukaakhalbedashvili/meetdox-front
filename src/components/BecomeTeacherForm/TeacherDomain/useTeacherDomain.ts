import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { categories } from '@/data/categoryItems'
import { TeacherDomainInfoValidationForm } from './teacherDomain.interface'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

const useTeacherDomain = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>,
  setFormValues: Dispatch<SetStateAction<FormValues>>
) => {
  const placeholderCategoryValue = 'Choose Category'

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
          return { name: item.name, checked: false }
        }) || []
    )
  }, [teacherDomainValidation.values.category])

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
  }
}

export default useTeacherDomain
