import { useFormik } from 'formik'
import * as Yup from 'yup'

const useDashboardPasswordChangeContent = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required('Current Password is required')
        .min(8, 'must be at least 8 characters'),
      newPassword: Yup.string()
        .required('New Password is required')
        .min(8, 'New Password must be at least 8 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      console.error(values)
      formik.resetForm()
    },
  })

  const { handleSubmit, handleChange, values, errors, touched } = formik

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  }
}

export default useDashboardPasswordChangeContent
