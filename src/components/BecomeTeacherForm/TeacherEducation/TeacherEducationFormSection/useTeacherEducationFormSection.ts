import { FormikProps } from 'formik'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { useGetCollegeList } from '@/reactQuery/becomeTeacherQueries/getCollegeList'
import { search } from '@/utils/services/search'
import { majors } from '@/data/majors'
import { TeacherEducationInfoValidationFormInputNames } from './teacherEducation.interface'
import { BecomeExpertForm } from '../../becomeTeacher.interface'
import { EducationValidationKeys } from '../../utils'

const useTeacherEducation = (
  becomeExpertValidation: FormikProps<BecomeExpertForm>,
  formKey: EducationValidationKeys
) => {
  const [collegeSearchResults, setCollegeSearchResults] = useState<string[]>()
  const [majorSearchResults, setMajorSearchResults] = useState<string[]>()

  const { data, refetch } = useGetCollegeList(
    becomeExpertValidation.values[formKey]?.university
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

  const onCollegeChange = (
    value: ChangeEvent<HTMLInputElement>,
    formKey: string
  ) => {
    becomeExpertValidation.setFieldValue(
      `${formKey}.${TeacherEducationInfoValidationFormInputNames.UNIVERSITY}`,
      value.target.value
    )

    sendApiRequest(value.target.value)
  }

  const onMajorChange = (
    value: ChangeEvent<HTMLInputElement>,
    formKey: string
  ) => {
    becomeExpertValidation.setFieldValue(
      `${formKey}.${TeacherEducationInfoValidationFormInputNames.MAJOR}`,
      value.target.value
    )
    handleMajorFilter(value.target.value)
  }

  useEffect(() => {
    data && setCollegeSearchResults(data)
  }, [data])

  return {
    onCollegeChange,
    collegeSearchResults,
    onMajorChange,
    majorSearchResults,
  }
}

export default useTeacherEducation
