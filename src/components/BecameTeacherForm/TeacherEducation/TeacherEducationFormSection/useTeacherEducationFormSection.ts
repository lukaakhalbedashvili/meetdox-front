import { useFormik } from 'formik'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import * as Yup from 'yup'
import debounce from 'lodash.debounce'
import { useGetCollegeList } from '@/reactQuery/becomeTeacherQueryies/getCollegeList'
import { search } from '@/utils/services/search'
import { majors } from '@/data/majors'
import {
  TeacherEducationInfoValidationForm,
  TeacherEducationInfoValidationFormInputNames,
} from './teacherEducation.interface'
import { BecameTeacherSections } from '../../becameTeacher.interface'

const useTeacherEducation = (
  isFormSubmitted: boolean,
  setErroredSections: Dispatch<SetStateAction<BecameTeacherSections>>
) => {
  const [collegeSearchResults, setCollegeSearchResults] = useState<string[]>()
  const [majorSearchResults, setMajorSearchResults] = useState<string[]>()

  const placeholderStartDate = 'Start date'
  const placeholderEndDate = 'End date'

  const validationSchema: Yup.ObjectSchema<TeacherEducationInfoValidationForm> =
    Yup.object({
      university: Yup.string().required('required'),
      major: Yup.string().required('required'),
      startDate: Yup.string()
        .required('required')
        .test('is it valid month', 'required', function (value) {
          return value !== placeholderStartDate
        }),
      endDate: Yup.string()
        .required('required')
        .test('is it valid month', 'required', function (value) {
          return value !== placeholderEndDate
        }),
    })

  const teacherEducationInfoValidation =
    useFormik<TeacherEducationInfoValidationForm>({
      initialValues: {
        university: '',
        major: '',
        startDate: placeholderStartDate,
        endDate: placeholderEndDate,
      },

      validationSchema,

      onSubmit: async () => {
        setErroredSections((prevState) => ({
          ...prevState,
          education: !teacherEducationInfoValidation.isValid,
        }))
      },
    })

  const { data, refetch } = useGetCollegeList(
    teacherEducationInfoValidation.values.university
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendApiRequest = useCallback(
    debounce((value) => value && refetch(), 1000),
    []
  )

  const handleCollegeFiltertext = (value: string) => {
    setMajorSearchResults(search(value, majors))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMajorFilter = useCallback(
    debounce((value) => handleCollegeFiltertext(value), 500),
    []
  )

  const onCollegeChange = (value: ChangeEvent<HTMLInputElement>) => {
    teacherEducationInfoValidation.setFieldValue(
      TeacherEducationInfoValidationFormInputNames.UNIVERSITY,
      value.target.value
    )
    sendApiRequest(value.target.value)
  }

  const onMajorChange = (value: ChangeEvent<HTMLInputElement>) => {
    teacherEducationInfoValidation.setFieldValue(
      TeacherEducationInfoValidationFormInputNames.MAJOR,
      value.target.value
    )
    handleMajorFilter(value.target.value)
  }

  useEffect(() => {
    data && setCollegeSearchResults(data)
  }, [data])

  useEffect(() => {
    isFormSubmitted && teacherEducationInfoValidation.submitForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted])

  return {
    teacherEducationInfoValidation,
    onCollegeChange,
    collegeSearchResults,
    onMajorChange,
    majorSearchResults,
    placeholderStartDate,
    placeholderEndDate,
  }
}

export default useTeacherEducation