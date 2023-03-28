import { useFormik } from 'formik'
import * as Yup from 'yup'
import { LogInFormFields } from './logIn.interface'

const useLogIn = () => {
  const LogInFormValidation = useFormik({
    initialValues: {
      [LogInFormFields.EMAIL]: '',
      [LogInFormFields.PASSWORD]: '',
    },

    validationSchema: Yup.object({
      [LogInFormFields.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .email('invalid email')
        .required('required'),

      [LogInFormFields.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),
    }),

    onSubmit: async (values) => {
      const { password, email } = values

      console.error('values', password, email)
    },
  })
  return { LogInFormValidation }
}

export default useLogIn
