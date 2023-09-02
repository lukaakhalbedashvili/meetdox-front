import * as Yup from 'yup'
import { FormikProps, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useZustandStore } from '@/zustand'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { AlertType } from '@/zustand/zustand.interface'
import { useSendTeacherCreationQueries } from '@/reactQuery/becomeTeacherQueries/useSendTeacherCreationQueries'
import { BecomeExpertForm, FormValues } from './becomeTeacher.interface'
import {
  customValidation,
  generateEducationValidationObjects,
  generateExperienceValidationObjects,
} from './utils'
import {
  defaultCountry,
  placeholderBirthMonth,
  placeholderBirthYear,
  placeholderCategoryValue,
} from './data'
import { TeacherData } from '../Catalog/catalog.interface'

const useTempo = () => {
  const { loggedInUser, setAlert } = useZustandStore()

  const router = useRouter()

  const { mutate } = useSendTeacherCreationQueries()

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

    contact: Yup.object().shape({
      country: Yup.string().required('required'),
      phone: Yup.string().required('required'),
      phoneExtension: Yup.string().required('required'),
    }),

    perHour: Yup.string().required('required'),
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

        teacherEducation0: expertDataFromBack?.teacherEducation?.[0],
        teacherEducation1: expertDataFromBack?.teacherEducation?.[1],
        teacherEducation2: expertDataFromBack?.teacherEducation?.[2],
        teacherEducation3: expertDataFromBack?.teacherEducation?.[3],
        teacherEducation4: expertDataFromBack?.teacherEducation?.[4],
        teacherEducation5: expertDataFromBack?.teacherEducation?.[5],

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

        description: expertDataFromBack?.description || '',

        contact: {
          country: expertDataFromBack?.country || defaultCountry,
          phone: expertDataFromBack?.contactDetails.phone || '',
          phoneExtension:
            expertDataFromBack?.contactDetails.phoneExtension || '',
        },

        perHour: expertDataFromBack?.perHour || '',
      },

      validationSchema,

      onSubmit: async (values) => {
        // function isPresent<T>(t: T | undefined | null | void): t is T {
        //   return t !== undefined && t !== null
        // }
        const educations = [
          values.teacherEducation0!,
          values.teacherEducation1!,
          values.teacherEducation2!,
          values.teacherEducation3!,
          values.teacherEducation4!,
          values.teacherEducation5!,
        ].filter((item) => item)

        const experiences = [
          values.teacherExperience0!,
          values.teacherExperience1!,
          values.teacherExperience2!,
          values.teacherExperience3!,
          values.teacherExperience4!,
          values.teacherExperience5!,
        ].filter((item) => item)

        const objectToSend: FormValues = {
          about: { description: values.description },
          contact: {
            country: values.contact.country,
            phone: values.contact.phone,
            phoneExtension: values.contact.phoneExtension,
          },
          domain: {
            category: values.domain.category,
            subCategories: values.domain.subCategories,
          },
          perHour: values.perHour,
          personalDetails: {
            birthMonth: values.birthMonth,
            birthYear: values.birthYear,
            lastName: values.lastName,
            name: values.name,
            image: values.image,
          },
          skills: values.skills,
          teacherEducation: educations,
          teacherExperience: experiences,
        }
        mutate(
          {
            data: objectToSend,
          },
          {
            onSuccess: () => {
              setAlert({
                message: 'teacher created successfully',
                type: AlertType.SUCCESS,
                onClick: () => {},
                duration: 5000,
              })
              router.push(`expert/${loggedInUser?.uid}`)
            },
          }
        )
      },
    })

  return { becomeExpertValidation, expertDataFromBack }
}

export default useTempo
