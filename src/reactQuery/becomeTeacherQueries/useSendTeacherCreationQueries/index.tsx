import { useMutation } from 'react-query'
import { FormValues } from '@/components/BecomeTeacherForm/becomeTeacher.interface'
import { createTeacher } from '@/utils/api/becameTeacherApis'

export interface UseSendTeacherCreationQueriesProps {
  data: FormValues
}

export const useSendTeacherCreationQueries = () => {
  return useMutation({
    mutationFn: async (payload: UseSendTeacherCreationQueriesProps) => {
      await createTeacher(payload)
    },
  })
}
