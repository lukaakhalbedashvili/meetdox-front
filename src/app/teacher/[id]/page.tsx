'use client'
import Image from 'next/image'
import { FC } from 'react'
import { ClipLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'
import TeacherSkillsToDisplay from '@/elements/TeacherSkillsToDisplay'
import TeacherBasicInformationToDisplay from '@/elements/TeacherBasicInformationToDisplay'
import TeacherExperienceSeparatorItem from '@/elements/TeacherExperienceSeparatorItem'
import TeacherEducationSeparator from '@/elements/TeacherEducationSeparator'
import PopupItemWrapper from '@/components/PopupItemWrapper'
import ScheduleMeetPopup from '@/components/ScheduleMeetPopup'
import ContentSeparator from '@/elements/ContentSeparator'
import Footer from '@/components/Footer'
import { TeacherSections } from '../teacher.interface'
import useTeacher from '../useTeacher'

interface TeacherProps {
  params: {
    id: string
  }
}

const Teacher: FC<TeacherProps> = ({ params }) => {
  const {
    activeSection,
    isModalOpen,
    setActiveSection,
    setIsModalOpen,
    data,
    isLoading,
    loggedInUser,
    setIsLogInPopupOpen,
  } = useTeacher({ teacherUid: params.id })

  const {
    domain,
    image,
    personalDetails,
    perHour,
    description,
    skills,
    reviews,
    teacherExperience,
    teacherEducation,
  } = data || {}

  const { category, subCategories } = domain || {}

  const { lastName, name } = personalDetails || {}

  const router = useRouter()

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mx-2 lg:relative lg:flex lg:items-start lg:bg-gray lg:px-6 lg:py-10">
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform ">
            <ClipLoader color="#36d7b7" />
          </div>
        )}

        <div className="flex flex-col items-center rounded-md border-border_gray bg-white px-3  lg:w-1/3 lg:py-6">
          {image && (
            <div className="relative flex h-44 w-44 max-w-[300px] rounded-full">
              <Image
                src={image}
                fill
                alt="profile image"
                className="rounded-full object-cover"
              />
            </div>
          )}

          <h2 className="font-semi-bold mt-4 overflow-hidden whitespace-nowrap text-xl">
            {name} {lastName}
          </h2>

          <div className="my-3 flex flex-col items-center text-sm text-icon_gray">
            <div className="mx-4 flex flex-wrap items-center justify-center">
              {subCategories?.map((item, index) => {
                return (
                  <div key={item} className="mx-[2px] flex whitespace-nowrap">
                    {item}
                    {index === subCategories.length - 1 ? '' : ','}
                  </div>
                )
              })}
            </div>

            <p>{`${perHour}/hr`}</p>
          </div>

          <div className="mb-10 mt-3 flex items-center text-center text-sm text-black lg:mx-4">
            {description}
          </div>

          {skills && (
            <div className="flex-col bg-sky lg:ml-4">
              {length > 0 && (
                <TeacherSkillsToDisplay header="Skills" skills={skills} />
              )}
            </div>
          )}
        </div>

        <div className="lg:ml-10 lg:w-1/2">
          {reviews && (
            <div className="mt-10 rounded-md bg-white p-4 px-4 lg:mt-0 lg:p-6">
              {location && data && (
                <TeacherBasicInformationToDisplay
                  location={data.country}
                  rating={data.rate}
                  totalReviews={reviews.length}
                  onPrimaryBtnClick={() => {
                    if (!loggedInUser?.uid) {
                      setIsLogInPopupOpen(true)
                      return
                    }
                    loggedInUser.uid === params.id
                      ? router.push('/become-mentor')
                      : setIsModalOpen(true)
                  }}
                  primaryBtnText={
                    loggedInUser?.uid === params.id
                      ? 'Edit Your Profile'
                      : 'Schedule a meet'
                  }
                />
              )}
            </div>
          )}

          <div className="mt-10 rounded-md bg-white p-4 px-6">
            <ContentSeparator
              sections={[TeacherSections.EXPERIENCE, TeacherSections.EDUCATION]}
              activeSection={activeSection}
              handleChange={(section) => {
                setActiveSection(section)
              }}
            >
              {activeSection === TeacherSections.EXPERIENCE &&
                teacherExperience && (
                  <TeacherExperienceSeparatorItem
                    experiences={teacherExperience}
                  />
                )}

              {activeSection === TeacherSections.EDUCATION &&
                teacherEducation && (
                  <TeacherEducationSeparator educations={teacherEducation} />
                )}
            </ContentSeparator>
          </div>
        </div>
      </div>

      {data && isModalOpen && perHour && category && name && lastName && (
        <PopupItemWrapper
          onOutsideClickHandler={() => {
            setIsModalOpen(false)
          }}
        >
          <ScheduleMeetPopup
            setIsModalOpen={setIsModalOpen}
            pricePerHour={perHour}
            domain={category}
            image={data.image}
            name={name}
            lastName={lastName}
            teacherUid={params.id}
          />
        </PopupItemWrapper>
      )}

      <Footer />
    </div>
  )
}

export default Teacher
