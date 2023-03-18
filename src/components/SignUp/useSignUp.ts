import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SignUpFormFields } from './signUp.interface'

const useSignup = () => {
  const SignUpFormValidation = useFormik({
    initialValues: {
      [SignUpFormFields.EMAIL]: '',
      [SignUpFormFields.PASSWORD]: '',
      [SignUpFormFields.CONFIRM_PASSWORD]: '',
    },

    validationSchema: Yup.object({
      [SignUpFormFields.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .required('required'),

      [SignUpFormFields.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .required('required'),

      [SignUpFormFields.CONFIRM_PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .required('required'),
    }),

    onSubmit: async (values) => {
      const { confirmPassword, password, email } = values

      console.error('values', confirmPassword, password, email)
    },
  })
  return { SignUpFormValidation }
}

export default useSignup
