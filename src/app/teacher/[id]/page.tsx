'use client'
import Image from 'next/image'
import { FC } from 'react'
import TeacherSkillsToDisplay from '@/elements/TeacherSkillsToDisplay'
import TeacherBasicInformationToDisplay from '@/elements/TeacherBasicInformationToDisplay'
import TeacherExperienceSeparatorItem from '@/elements/TeacherExperienceSeparatorItem'
import TeacherEducationSeparator from '@/elements/TeacherEducationSeparator'
import PopupItemWrapper from '@/components/PopupItemWrapper'
import ScheduleMeetPopup from '@/components/ScheduleMeetPopup'
import ContentSeparator from '@/elements/ContentSeparator'
import { TeacherSections } from '../teacher.interface'
import useTeacher from '../useTeacher'

interface TeacherProps {
  params: {
    id: string
  }
}

const Teacher: FC<TeacherProps> = ({ params }) => {
  const { activeSection, isModalOpen, setActiveSection, setIsModalOpen, data } =
    useTeacher({ teacherUid: params.id })

  if (!data) return <h1>loading...</h1>

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
  } = data

  const { category, subCategories } = domain

  const { lastName, name } = personalDetails

  return (
    <>
      {data && (
        <div className="mx-2 lg:flex lg:items-start lg:bg-gray lg:px-6 lg:py-10">
          <div className="flex flex-col items-center rounded-md border-border_gray bg-white px-3  lg:w-1/3 lg:py-6">
            {image && (
              <div className="relative flex h-44 w-44 max-w-[300px] rounded-full">
                <Image
                  src={data.image}
                  fill
                  alt="profile image"
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <h2 className="font-semi-bold mt-4 overflow-hidden whitespace-nowrap text-xl">
              {personalDetails.name} {personalDetails.lastName}
            </h2>

            <div className="my-3 flex flex-col items-center text-sm text-icon_gray">
              <div className="flex flex-wrap items-center justify-center lg:mx-6">
                <p>{`${category} -`}</p>

                {subCategories?.map((item, index) => {
                  return (
                    <div key={item} className="mx-[2px] flex">
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

            <div className="lg:ml-4">
              {skills.length > 0 && (
                <TeacherSkillsToDisplay header="Skills" skills={skills} />
              )}
            </div>
          </div>

          <div className="lg:ml-10 lg:w-1/2">
            <div className="mt-10 rounded-md bg-white p-4 px-4 lg:mt-0 lg:p-6">
              {location && data && (
                <TeacherBasicInformationToDisplay
                  location={data.country}
                  rating={data.rate}
                  totalReviews={reviews.length}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </div>

            <div className="mt-10 rounded-md bg-white p-4 px-4">
              <ContentSeparator
                sections={[
                  TeacherSections.EXPERIENCE,
                  TeacherSections.EDUCATION,
                ]}
                activeSection={activeSection}
                handleChange={(section) => {
                  setActiveSection(section)
                }}
              >
                {activeSection === TeacherSections.EXPERIENCE && (
                  <TeacherExperienceSeparatorItem
                    experiences={teacherExperience}
                  />
                )}

                {activeSection === TeacherSections.EDUCATION && (
                  <TeacherEducationSeparator educations={teacherEducation} />
                )}
              </ContentSeparator>
            </div>
          </div>
        </div>
      )}

      {data && isModalOpen && (
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
    </>
  )
}

export default Teacher
