import * as Yup from 'yup'
import { FormikProps, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useZustandStore } from '@/zustand'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { BecomeExpertForm } from './becomeTeacher.interface'
import {
  generateEducationValidationObjects,
  generateExperienceValidationObjects,
} from './utils'
import { placeholderBirthMonth, placeholderBirthYear } from './data'
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
  })

  const becomeExpertValidation: FormikProps<BecomeExpertForm> =
    useFormik<BecomeExpertForm>({
      enableReinitialize: true,
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
        teacherEducation0: undefined,
        teacherEducation1: undefined,
        teacherEducation2: undefined,
        teacherEducation3: undefined,
        teacherEducation4: undefined,
        teacherEducation5: undefined,
        // experiences
        teacherExperience0: undefined,
        teacherExperience1: undefined,
        teacherExperience2: undefined,
        teacherExperience3: undefined,
        teacherExperience4: undefined,
        teacherExperience5: undefined,
      },

      validationSchema,

      onSubmit: async (values) => {
        console.error(values, 'xas')
      },
    })

  return { becomeExpertValidation, expertDataFromBack }
}

export default useTempo
