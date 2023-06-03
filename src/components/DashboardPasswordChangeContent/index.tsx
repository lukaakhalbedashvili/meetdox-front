import React from 'react'
import { ClipLoader } from 'react-spinners'
import Button from '@/elements/Button'
import Input from '@/elements/Input'
import useDashboardPasswordChangeContent from './useDashboardPasswordChangeContent'

const DashboardPasswordChangeContent = () => {
  const { handleSubmit, handleChange, values, errors, touched, isPending } =
    useDashboardPasswordChangeContent()

  return (
    <div className="password-change">
      <h1 className="title mb-4 text-xl font-medium">Change Password</h1>
      {isPending && (
        <div className="align-center container mx-auto mb-8 flex justify-center rounded-md bg-background_gray p-8">
          <ClipLoader color="#36d7b7" />
        </div>
      )}

      {!isPending && (
        <div className="container mx-auto mb-8 rounded-md bg-background_gray p-8">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group relative mb-12 h-10 flex-row sm:mb-8 sm:flex">
              <label
                htmlFor="current-password"
                className="label mt-2 mr-8 w-1/3"
              >
                Current Password
              </label>
              <Input
                type="password"
                placeholder="Enter current password"
                value={values.currentPassword}
                name="currentPassword"
                onChange={handleChange}
              />
              {errors.currentPassword && touched.currentPassword && (
                <p className="mt-1 text-sm text-error sm:absolute sm:-bottom-6 sm:right-0">
                  {errors.currentPassword}
                </p>
              )}
            </div>

            <div className="form-group align-center relative mb-16 h-10 flex-row justify-center sm:mb-8 sm:flex">
              <label
                htmlFor="new-password"
                className="center-items mr-8 flex w-full sm:w-1/3"
              >
                <span className="align-center mt-2 flex">New Password</span>
              </label>
              <Input
                type="password"
                placeholder="Enter new password"
                value={values.newPassword}
                name="newPassword"
                onChange={handleChange}
              />
              {errors.newPassword && touched.newPassword && (
                <p className="mt-1 text-sm text-error sm:absolute sm:-bottom-6 sm:right-0">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className="form-group relative h-10 flex-row sm:flex">
              <label
                htmlFor="confirm-password"
                className="label mt-2 mr-8 w-1/3"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="Confirm new password"
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="mt-1 text-sm text-error sm:absolute sm:-bottom-6 sm:right-0">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="mt-16 flex w-full justify-end sm:mt-8">
              <Button
                type="submit"
                customTailwindClasses="bg-sky border-sky text-white"
              >
                <p className="flex h-[36px] w-32 items-center justify-center text-sm">
                  Update
                </p>
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default DashboardPasswordChangeContent
