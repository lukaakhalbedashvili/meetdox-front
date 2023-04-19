'use client'
import React from 'react'
import Image from 'next/image'
import Input from '@/elements/Input'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import { months } from '@/data/teachersDummyData'
import Button from '@/elements/Button'
import useTeacherPersonalInfo from './useTeacherPersonalInfo'
import { TeacherPersonalInfoFormInputNames } from './teacherPersonalInfo.interface'
import PhotoEditor from '../PhotoEditor'
import PopupItemWrapper from '../PopupItemWrapper'

const TeacherPersonalInfo = () => {
  const {
    teacherPersonalInfoValidation,
    placeholderBirthMonth,
    placeholderBirthYear,
    isUploadImageModalOpen,
    setIsUploadImageModalOpen,
    userImage,
    setUserImage,
    handleUpload,
    uploadedImage,
    fileInputRef,
    setUploadedImage,
  } = useTeacherPersonalInfo()

  return (
    <>
      <div className="ml-4">
        <h2 className="text-xl mb-1">Personal details</h2>

        <div className="flex items-center sx:flex-col">
          <div className="h-10 w-1/4 mr-2">
            <Input
              placeholder="First Name"
              type="text"
              onChange={teacherPersonalInfoValidation.handleChange}
              name={TeacherPersonalInfoFormInputNames.NAME}
              onBlurHandler={teacherPersonalInfoValidation.handleBlur}
              errorMessage={
                teacherPersonalInfoValidation.touched.name &&
                teacherPersonalInfoValidation.errors.name
              }
              value={teacherPersonalInfoValidation.values.name}
            />
          </div>

          <div className="h-10 w-1/4 mr-2">
            <Input
              placeholder="Middle Name"
              type="text"
              onChange={teacherPersonalInfoValidation.handleChange}
              name={TeacherPersonalInfoFormInputNames.MIDDLE_NAME}
              onBlurHandler={teacherPersonalInfoValidation.handleBlur}
              errorMessage={
                teacherPersonalInfoValidation.touched.middleName &&
                teacherPersonalInfoValidation.errors.middleName
              }
              value={teacherPersonalInfoValidation.values.middleName}
            />
          </div>

          <div className="h-10 w-1/4 mr-2">
            <Input
              placeholder="Last Name"
              type="text"
              onChange={teacherPersonalInfoValidation.handleChange}
              name={TeacherPersonalInfoFormInputNames.LAST_NAME}
              onBlurHandler={teacherPersonalInfoValidation.handleBlur}
              errorMessage={
                teacherPersonalInfoValidation.touched.lastName &&
                teacherPersonalInfoValidation.errors.lastName
              }
              value={teacherPersonalInfoValidation.values.lastName}
            />
          </div>

          <div className="h-10 mr-2">
            <DropDownInput
              options={months}
              name={TeacherPersonalInfoFormInputNames.BIRTH_MONTH}
              onBlurHandler={teacherPersonalInfoValidation.handleBlur}
              errorMessage={
                teacherPersonalInfoValidation.touched.birthMonth &&
                teacherPersonalInfoValidation.errors.birthMonth
              }
              onChange={teacherPersonalInfoValidation.handleChange}
              value={teacherPersonalInfoValidation.values.birthMonth}
              placeHolderValue={placeholderBirthMonth}
            />
          </div>

          <div className="h-10">
            <DropDownInput
              options={getAgeRange()}
              name={TeacherPersonalInfoFormInputNames.BIRTH_YEAR}
              onBlurHandler={teacherPersonalInfoValidation.handleBlur}
              errorMessage={
                teacherPersonalInfoValidation.touched.birthYear &&
                teacherPersonalInfoValidation.errors.birthYear
              }
              onChange={teacherPersonalInfoValidation.handleChange}
              value={teacherPersonalInfoValidation.values.birthYear}
              placeHolderValue={placeholderBirthYear}
            />
          </div>
        </div>

        {!userImage && (
          <div className="mt-2">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
              onClickHandler={() => {
                setIsUploadImageModalOpen(true)
                fileInputRef.current?.click()
              }}
            >
              <p className="text-sm flex items-center justify-center w-32 h-[36px]">
                Upload Image
              </p>
            </Button>
          </div>
        )}
      </div>

      {userImage && (
        <div className="group relative w-fit h-fit mt-4 rounded-full cursor-pointer">
          <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 peer">
            <Button
              type="submit"
              customTailwindClasses="bg-sky border-sky text-white"
              onClickHandler={() => {
                fileInputRef.current?.click()
                setIsUploadImageModalOpen(true)
              }}
            >
              <p className="text-sm flex items-center justify-center w-32 h-[36px]">
                Change Image
              </p>
            </Button>
          </div>

          <div className="hover:opacity-25 peer-hover:opacity-25 ml-2">
            <Image
              src={userImage}
              width={200}
              height={200}
              alt="ashjn"
              className="rounded-full border-2 border-sky"
            />
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        className="hidden"
        accept="image/png, image/jpeg"
        multiple
        type="file"
        onChange={(e) => e.target.files && handleUpload(e.target.files)}
      />

      {isUploadImageModalOpen && uploadedImage && (
        <PopupItemWrapper>
          <PhotoEditor
            image={uploadedImage}
            onCloseHandler={() => setIsUploadImageModalOpen(false)}
            onSaveHandler={(image) => {
              setUserImage(image)
              setIsUploadImageModalOpen(false)
              setUploadedImage(undefined)
            }}
          />
        </PopupItemWrapper>
      )}
    </>
  )
}

export default TeacherPersonalInfo
