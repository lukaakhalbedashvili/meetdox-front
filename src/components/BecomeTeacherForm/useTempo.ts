import * as Yup from 'yup'
import { FormikProps, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useZustandStore } from '@/zustand'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { BecomeExpertForm } from './becomeTeacher.interface'
import {
  customValidation,
  generateEducationValidationObjects,
  generateExperienceValidationObjects,
} from './utils'
import {
  placeholderBirthMonth,
  placeholderBirthYear,
  placeholderCategoryValue,
} from './data'
import { TeacherData } from '../Catalog/catalog.interface'

const useTempo = () => {
  const { loggedInUser } = useZustandStore()

  const [expertDataFromBack, setExpertDataFromBack] = useState<
    TeacherData | undefined
  >(undefined)

  const { refetch } = useGetTeacherPublicData(loggedInUser?.uid)

  useEffect(() => {
    refetch().then((data) => {
      data.data?.country && setExpertDataFromBack(data.data)
    })
  }, [refetch, loggedInUser?.uid])

  const validationSchema: Yup.ObjectSchema<BecomeExpertForm> = Yup.object({
    name: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    birthMonth: Yup.string()
      .required('required')
      .test('is it valid month', 'required', function (value) {
        return value !== placeholderBirthMonth
      }),
    birthYear: Yup.string()
      .required('required')
      .test('is it valid year', 'required', function (value) {
        return value !== placeholderBirthYear
      }),
    image: Yup.string().required('required'),

    ...generateEducationValidationObjects(),

    ...generateExperienceValidationObjects(),

    domain: Yup.object().shape({
      category: Yup.string().required('required'),
      subCategories: Yup.array().required('required'),
    }),

    skills: Yup.array(),

    description: Yup.string().required('required'),
  })

  const becomeExpertValidation: FormikProps<BecomeExpertForm> =
    useFormik<BecomeExpertForm>({
      enableReinitialize: true,
      validate: customValidation,
      initialValues: {
        birthMonth:
          expertDataFromBack?.personalDetails.birthMonth ||
          placeholderBirthMonth,
        birthYear:
          expertDataFromBack?.personalDetails.birthYear || placeholderBirthYear,
        lastName: expertDataFromBack?.personalDetails.lastName || '',
        name: expertDataFromBack?.personalDetails.name || '',
        image: expertDataFromBack?.image || null,
        // education
        teacherEducation0: expertDataFromBack?.teacherEducation?.[0],
        teacherEducation1: expertDataFromBack?.teacherEducation?.[1],
        teacherEducation2: expertDataFromBack?.teacherEducation?.[2],
        teacherEducation3: expertDataFromBack?.teacherEducation?.[3],
        teacherEducation4: expertDataFromBack?.teacherEducation?.[4],
        teacherEducation5: expertDataFromBack?.teacherEducation?.[5],
        // experiences
        teacherExperience0: expertDataFromBack?.teacherExperience?.[0],
        teacherExperience1: expertDataFromBack?.teacherExperience?.[1],
        teacherExperience2: expertDataFromBack?.teacherExperience?.[2],
        teacherExperience3: expertDataFromBack?.teacherExperience?.[3],
        teacherExperience4: expertDataFromBack?.teacherExperience?.[4],
        teacherExperience5: expertDataFromBack?.teacherExperience?.[5],

        domain: {
          category:
            expertDataFromBack?.domain.category || placeholderCategoryValue,
          subCategories: expertDataFromBack?.domain.subCategories || [],
        },

        skills: [],

        description: '',
      },

      validationSchema,

      onSubmit: async (values) => {
        console.error(values, 'xas')
      },
    })

  return { becomeExpertValidation, expertDataFromBack }
}

export default useTempo
