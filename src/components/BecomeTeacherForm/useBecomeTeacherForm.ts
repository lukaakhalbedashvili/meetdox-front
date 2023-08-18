import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSendTeacherCreationQueries } from '@/reactQuery/becomeTeacherQueries/useSendTeacherCreationQueries'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import { AlertType } from '@/zustand/zustand.interface'
import { useGetTeacherPublicData } from '@/reactQuery/teacherQuaries/getTeacherPublicData'
import { useZustandStore } from '@/zustand'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from './becomeTeacher.interface'

const useBecameTeacherForm = () => {
  const { setAlert, setIsLogInPopupOpen } = useZustandStore()
  const router = useRouter()
  const { data, refetch } = useFetchLoggedInUserData()
  const teacherData = useGetTeacherPublicData(data?.data.data.uid)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [erroredSections, setErroredSections] =
    useState<BecomeTeacherSectionsErrors>({
      personalDetails: true,
      education: true,
      experience: true,
      skills: true,
      domain: true,
      contact: true,
      about: true,
      compensationForm: true,
    })

  const [values, setValues] = useState<FormValues>({
    personalDetails: {
      birthMonth: '',
      birthYear: '',
      lastName: '',
      name: '',
      image: null,
    },
    skills: [],
    teacherEducation: [],
    domain: { category: '', subCategories: [] },
    contact: { country: '', phone: '' },
    teacherExperience: [],
    about: { description: '' },
    perHour: '',
  })

  const { mutate } = useSendTeacherCreationQueries()

  useEffect(() => {
    refetch().then((returnedData) => {
      if (!returnedData.data) {
        router.push('/')
        setAlert({
          message: 'Sign in first',
          type: AlertType.ERROR,
          onClick: () => {},
          duration: 5000,
        })
        setIsLogInPopupOpen(true)
      }
    })
    teacherData.refetch()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { personalDetails, contact, about, domain, perHour } = values
    const { birthMonth, birthYear, lastName, name, image } = personalDetails
    const { country, phone } = contact
    const { description } = about
    const { category, subCategories } = domain

    if (
      birthMonth &&
      birthYear &&
      lastName &&
      name &&
      image &&
      country &&
      phone &&
      description &&
      category &&
      perHour &&
      subCategories.length > 0
    ) {
      mutate(
        {
          data: { ...values },
        },
        {
          onSuccess: () => {
            router.push(`expert/${data?.data.data.uid}`)
            setAlert({
              message: 'teacher created successfully',
              type: AlertType.SUCCESS,
              onClick: () => {},
              duration: 5000,
            })
          },
        }
      )
    } else {
      setIsFormSubmitted(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erroredSections, isFormSubmitted])

  return {
    setErroredSections,
    setValues,
    isFormSubmitted,
    setIsFormSubmitted,
    values,
    teacherData: teacherData.data,
    isTeacherDataLoading: teacherData.isLoading,
  }
}

export default useBecameTeacherForm
