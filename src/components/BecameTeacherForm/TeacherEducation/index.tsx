'use client'
import { ChangeEvent, useCallback, useState } from 'react'
import debounce from 'lodash.debounce'
import axios from 'axios'
import TypeAheadInput from '@/elements/TypeAheadInput'
import useTeacherEducation from './useTeacherEducation'
import {
  Suggestion,
  TeacherEducationInfoValidationFormInputNames,
} from './teacherEducation.interface'

const TeacherEducation = () => {
  useTeacherEducation()
  const [value, setValue] = useState('')
  const [results, setResults] = useState<string[]>()

  const apiRequest = (value: string) => {
    axios
      .get('https://iys-skill-api.p.rapidapi.com/ISOT/', {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'X-RapidAPI-Key':
            'de3f5db620mshb0965867c867002p1d40adjsnb861fe17ea56',
        },
        params: { q: value, limit: 5 },
      })
      .then((res) => {
        setResults(
          res.data.results.map((item: Suggestion) => {
            return item.skill.name
          })
        )
      })
  }

  const sendApiRequest = useCallback(
    debounce((value) => value && apiRequest(value), 1000),
    []
  )

  const onChange = (value: ChangeEvent<HTMLInputElement>) => {
    setValue(value.target.value)
    sendApiRequest(value.target.value)
  }

  return (
    <div className="mx-4">
      <h2 className="mb-1 text-xl">Education details</h2>

      <div className="mt-2 flex flex-col items-center">
        <div className="mr-2 mt-2 h-10 w-full">
          <TypeAheadInput
            value={value}
            onChange={onChange}
            name={TeacherEducationInfoValidationFormInputNames.UNIVERSITY}
            results={results}
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherEducation
