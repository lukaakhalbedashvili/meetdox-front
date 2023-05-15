'use client'
import Image from 'next/image'
import { BsFillStarFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { teachersDummyData } from '@/data/teachersDummyData'
import Button from '@/elements/Button'
import TeacherStats from '@/elements/TeacherStats'
import TeacherSkillsToDisplay from '@/elements/TeacherSkillsToDisplay'
import TeacherDomainToDisplay from '@/elements/TeacherDomainToDisplay'

const Teacher = () => {
  const {
    image,
    name,
    lastName,
    rating,
    totalReviews,
    title,
    skills,
    subDomains,
  } = teachersDummyData[0]

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <div className="px:4 mx-2 sm:px-10 lg:px-4 lg:pt-0">
      <div className="mt-2 flex border-b-[1px] border-border_gray px-3 py-8">
        <div className="relative h-24 w-24 max-w-[300px] rounded-full sm:h-40 sm:w-60">
          <Image
            src={image}
            fill
            alt="profile image"
            className="rounded-full object-fill sm:rounded-md"
          />
        </div>

        <div className="ml-6 flex flex-col justify-around">
          <h2 className="font-semi-bold overflow-hidden whitespace-nowrap text-2xl">
            {name} {lastName}
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BsFillStarFill className="fill-star_gold" />

              <p className="mx-1">{rating}</p>

              <p className="text-icon_gray">{`(${totalReviews})`}</p>
            </div>

            <Button
              type="button"
              customTailwindClasses="bg-sky border-sky text-white"
            >
              <p className="flex h-8 w-24 items-center justify-center text-sm">
                Call
              </p>
            </Button>
          </div>
        </div>
      </div>

      <div className="items-start lg:flex">
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
      </div>
    </div>
  )
}

export default Teacher
