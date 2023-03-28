import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VerifyField } from './emailVerify.interface'

const useEmailVerify = () => {
  const EmailVerifyCodeValidation = useFormik({
    initialValues: {
      [VerifyField.CODE]: '',
    },

    validationSchema: Yup.object({
      [VerifyField.CODE]: Yup.string()
        .max(35, 'must be less than 35')
        .min(4, 'must be more than 3')
        .required('required'),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { code } = values

      console.log('values', code)
      resetForm()
      setSubmitting(false)
    },
  })
  return { EmailVerifyCodeValidation }
}

export default useEmailVerify
