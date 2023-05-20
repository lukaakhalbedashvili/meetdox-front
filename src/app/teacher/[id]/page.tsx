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
    <div className="mx-2 lg:flex lg:items-start lg:px-6">
      <div className="mt-2 flex flex-col items-center border-border_gray  px-3 lg:mt-10 lg:w-1/3">
        <div className="relative flex h-44 w-44 max-w-[300px] rounded-full">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="font-semi-bold mt-4 overflow-hidden whitespace-nowrap text-2xl">
          {name} {lastName}
        </h2>

        <div className="my-3 flex flex-col items-center text-icon_gray">
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

        <div className="mb-10 mt-3 flex items-center  text-black">{title}</div>

        {skills && <TeacherSkillsToDisplay header="Skills" skills={skills} />}
      </div>

      <div className="lg:ml-10 lg:w-1/2">
        <div className="mt-10 px-3">
          {location && (
            <TeacherBasicInformationToDisplay
              location={location}
              rating={rating}
              totalReviews={totalReviews}
            />
          )}
        </div>

        <div className="mx-4 mt-16">
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
