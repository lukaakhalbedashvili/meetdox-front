'use client'
import Image from 'next/image'
import { useState } from 'react'
import { teachersDummyData } from '@/data/teachersDummyData'
import TeacherSkillsToDisplay from '@/elements/TeacherSkillsToDisplay'
import TeacherBasicInformationToDisplay from '@/elements/TeacherBasicInformationToDisplay'
import TeacherExperienceSeparatorItem from '@/elements/TeacherExperienceSeparatorItem'
import TeacherEducationSeparator from '@/elements/TeacherEducationSeparator'
import ContentSeparator from '@/elements/ContentSeparator'
import { TeacherSections } from '../teacher.interface'

const Teacher = () => {
  const {
    image,
    name,
    lastName,
    domain,
    rating,
    totalReviews,
    title,
    skills,
    salary,
    subDomains,
    location,
    experiences,
    education,
  } = teachersDummyData[0]

  const [activeSection, setActiveSection] = useState<TeacherSections>(
    TeacherSections.EXPERIENCE
  )

  return (
    <div className="mx-2 lg:flex lg:items-start lg:bg-gray lg:px-6 lg:py-10">
      <div className="flex flex-col items-center rounded-md border-border_gray bg-white px-3  lg:w-1/3 lg:py-6">
        <div className="relative flex h-44 w-44 max-w-[300px] rounded-full">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="font-semi-bold mt-4 overflow-hidden whitespace-nowrap text-xl">
          {name} {lastName}
        </h2>

        <div className="my-3 flex flex-col items-center text-sm text-icon_gray">
          <div className="flex items-center">
            <p>{`${domain} -`}</p>

            {subDomains?.map((item, index) => {
              return (
                <div key={item} className="mx-[2px] flex">
                  {item}
                  {index === subDomains.length - 1 ? '' : ','}
                </div>
              )
            })}
          </div>

          <p>{`${salary}/hr`}</p>
        </div>

        <div className="mb-10 mt-3 flex items-center text-center text-sm text-black lg:mx-4">
          {title}
        </div>

        <div className="lg:ml-4">
          {skills && <TeacherSkillsToDisplay header="Skills" skills={skills} />}
        </div>
      </div>

      <div className="lg:ml-10 lg:w-1/2">
        <div className="mt-10 rounded-md bg-white p-4 px-4 lg:mt-0 lg:p-6">
          {location && (
            <TeacherBasicInformationToDisplay
              location={location}
              rating={rating}
              totalReviews={totalReviews}
            />
          )}
        </div>

        <div className="mt-10 rounded-md bg-white p-4 px-6">
          <ContentSeparator
            sections={[TeacherSections.EXPERIENCE, TeacherSections.EDUCATION]}
            activeSection={activeSection}
            handleChange={(section) => {
              setActiveSection(section)
            }}
          >
            {activeSection === TeacherSections.EXPERIENCE && experiences && (
              <TeacherExperienceSeparatorItem experiences={experiences} />
            )}

            {activeSection === TeacherSections.EDUCATION && education && (
              <TeacherEducationSeparator educations={education} />
            )}
          </ContentSeparator>
        </div>
      </div>
    </div>
  )
}

export default Teacher
