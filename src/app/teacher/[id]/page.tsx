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
    <div className="px:4 mx-2 sm:px-10 lg:px-4 lg:pt-0">
      <div className="mt-2 flex flex-col items-center border-border_gray  px-3 ">
        <div className="relative flex h-44 w-44 max-w-[300px] rounded-full sm:h-40 sm:w-60">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-fill sm:rounded-md"
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

      {/* <div className="items-start lg:flex">
        <div className="lg:w-1/3">
          <div className="py-6">
            <TeacherStats
              hoursInCall={12}
              totalEarned={1200}
              totalStudents={25}
            />
          </div>

          {subDomains && (
            <div className="">
              <TeacherDomainToDisplay subDomains={subDomains} />
            </div>
          )}

          {windowWidth < 1080 && (
            <div className="border-t-[1px] border-border_gray px-4 py-6 text-icon_gray">
              <p>{title}</p>
            </div>
          )}

          {skills && <TeacherSkillsToDisplay header="Skills" skills={skills} />}
        </div>

        {windowWidth > 1080 && (
          <div className="ml-10 px-4 py-6 text-icon_gray">
            <p>{title}</p>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default Teacher
