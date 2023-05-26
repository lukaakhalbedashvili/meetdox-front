import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSendTeacherCreationQueries } from '@/reactQuery/becomeTeacherQueries/useSendTeacherCreationQueries'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from './becomeTeacher.interface'

const useBecameTeacherForm = () => {
  const router = useRouter()
  const { data } = useFetchLoggedInUserData()

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
        { onSuccess: () => router.push(`teacher/${data?.data.data.uid}`) }
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
  }
}

export default useBecameTeacherForm
