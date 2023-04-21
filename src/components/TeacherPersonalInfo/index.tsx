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
import PhotoEditor from '../../elements/PhotoEditor'
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
      <div className="mx-4">
        <h2 className="mb-1 text-xl">Personal details</h2>

        <div className="mt-2 flex flex-col items-center">
          <div className="mr-2 h-10 w-full">
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

          <div className="mr-2 mt-2 h-10 w-full">
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

          <div className="mr-2 mt-2 h-10 w-full">
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

          <div className="mt-2 -ml-2 flex w-full items-center">
            <div className="mr-2 h-10">
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
              <p className="flex h-[36px] w-32 items-center justify-center text-sm">
                Upload Image
              </p>
            </Button>
          </div>
        )}

        {userImage && (
          <div className="group relative mt-4 h-fit w-fit cursor-pointer rounded-full">
            <div className="peer absolute top-1/2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform group-hover:block">
              <Button
                type="submit"
                customTailwindClasses="bg-sky border-sky text-white"
                onClickHandler={() => {
                  fileInputRef.current?.click()
                  setIsUploadImageModalOpen(true)
                }}
              >
                <p className="flex h-[36px] w-32 items-center justify-center text-sm">
                  Change Image
                </p>
              </Button>
            </div>

            <div className="h-40 w-64 overflow-hidden hover:opacity-25 peer-hover:opacity-25">
              <Image
                src={userImage}
                fill
                alt="ashjn"
                className="rounded-md border-2 border-sky"
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
      </div>

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
