'use client'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Image from 'next/image'
import Input from '@/elements/Input'
import DropDownInput from '@/elements/DropDownInput'
import { getAgeRange } from '@/utils/services/getTeacherAgeRange'
import { months } from '@/data/teachersDummyData'
import Button from '@/elements/Button'
import { uploadImageToFirebase } from '@/utils/firebase/uploadImageToFirebase'
import useTeacherPersonalInfo from './useTeacherPersonalInfo'
import { TeacherPersonalInfoFormInputNames } from './teacherPersonalInfo.interface'
import PhotoEditor from '../../../elements/PhotoEditor'
import PopupItemWrapper from '../../PopupItemWrapper'
import {
  BecomeTeacherSectionsErrors,
  FormValues,
} from '../becomeTeacher.interface'

interface TeacherPersonalInfoProps {
  isFormSubmitted: boolean
  setErroredSections: Dispatch<SetStateAction<BecomeTeacherSectionsErrors>>
  setFormValues: Dispatch<SetStateAction<FormValues>>
}

const TeacherPersonalInfo: FC<TeacherPersonalInfoProps> = ({
  isFormSubmitted,
  setErroredSections,
  setFormValues,
}) => {
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
    isImageError,
    userId,
    setImageFromFirebase,
  } = useTeacherPersonalInfo(isFormSubmitted, setErroredSections, setFormValues)

  return (
    <>
      <div className="mx-4 sm:px-8">
        <h2 className="mb-1 text-xl">Personal details</h2>

        <div className="mt-2 flex w-full flex-col items-center sm:w-2/3">
          <div className="w-full sm:flex sm:items-center  sm:justify-center">
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

            <div className="mt-2 h-10 w-full sm:mt-0">
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
          </div>

          <div className="mt-2 flex w-full items-center">
            <div className="mr-2 h-10 w-1/2 sm:w-40">
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

            <div className="h-10 w-1/2 sm:w-40">
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
          <div className="mt-3">
            <Button
              type="button"
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

            {isImageError && (
              <p className="w-fit bg-white px-1 text-sm text-error">
                Photo is required
              </p>
            )}
          </div>
        )}

        {userImage && (
          <div className="relative mt-4 h-fit w-full cursor-pointer rounded-full">
            <div className="group relative h-40 w-full max-w-[300px] overflow-hidden">
              <Image
                src={userImage}
                fill
                alt="your profile image"
                className="rounded-md border-2 border-sky"
              />

              {!isUploadImageModalOpen && (
                <div className="absolute top-3/4 left-1/2 z-50 block  max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform sm:opacity-0 sm:group-hover:opacity-100">
                  <Button
                    type="button"
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
              )}
            </div>
          </div>
        )}

        <input
          autoComplete="off"
          ref={fileInputRef}
          className="hidden"
          accept="image/png, image/jpeg"
          type="file"
          onChange={(e) =>
            e.target.files?.[0] && handleUpload(e.target.files[0])
          }
        />
      </div>

      {isUploadImageModalOpen && uploadedImage && (
        <PopupItemWrapper>
          <PhotoEditor
            image={uploadedImage}
            onCloseHandler={() => setIsUploadImageModalOpen(false)}
            onSaveHandler={(image) => {
              setUserImage(image.dataUrl)
              userId &&
                uploadImageToFirebase({
                  userId,
                  imageToUpload: image.blob,
                  onSuccessHandler: (url) => {
                    // setFormValues((prevState): FormValues => {
                    //   return {
                    //     ...prevState,
                    //     personalDetails: { ...prevState.personalDetails, image: url },
                    //   }
                    // })
                    setImageFromFirebase(url)
                  },
                })
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
