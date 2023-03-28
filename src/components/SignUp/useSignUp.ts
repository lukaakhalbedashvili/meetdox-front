import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SignUpFormFields } from './signUp.interface'

const useSignup = () => {
  const SignUpFormValidation = useFormik({
    initialValues: {
      [SignUpFormFields.EMAIL]: '',
      [SignUpFormFields.USERNAME]: '',
      [SignUpFormFields.PASSWORD]: '',
      [SignUpFormFields.CONFIRM_PASSWORD]: '',
    },

    validationSchema: Yup.object({
      [SignUpFormFields.EMAIL]: Yup.string()
        .max(35, 'must be less than 35')
        .email('invalid email')
        .required('required'),

      [SignUpFormFields.USERNAME]: Yup.string()
        .max(35, 'must be less than 35')
        .min(3, 'must be more than 2')
        .required('required'),

      [SignUpFormFields.PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .required('required'),

      [SignUpFormFields.CONFIRM_PASSWORD]: Yup.string()
        .max(35, 'must be less than 35')
        .min(8, 'must be more than 8')
        .oneOf([Yup.ref('password')], 'passwords must match')
        .required('required'),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { confirmPassword, password, email } = values

      console.log('values', confirmPassword, password, email)
      resetForm()
      setSubmitting(false)
    },
  })
  return { SignUpFormValidation }
}

export default useSignup
