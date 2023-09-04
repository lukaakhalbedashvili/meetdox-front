import { useEffect, useState } from 'react'
import { FormikProps } from 'formik'
import { categories } from '@/data/categoryItems'
import { BecomeExpertForm } from '../becomeTeacher.interface'

const useTeacherDomain = (
  becomeExpertValidation: FormikProps<BecomeExpertForm>
) => {
  const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>([])

  interface SubCategory {
    name: string
    checked: boolean
  }

  const categoriesData = categories.map((item) => item.name)

  useEffect(() => {
    setSubCategoriesData(
      categories
        .find(
          (item) => item.name === becomeExpertValidation.values.domain.category
        )
        ?.subCategories.map((item) => {
          return {
            name: item.name,
            checked:
              becomeExpertValidation.values.domain.subCategories.includes(
                item.name
              ),
          }
        }) || []
    )
  }, [
    becomeExpertValidation.values.domain.category,
    becomeExpertValidation.values.domain.subCategories,
  ])

  return {
    categoriesData,
    subCategoriesData,
    setSubCategoriesData,
  }
}

export default useTeacherDomain
