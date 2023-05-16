import React, { FC } from 'react'

interface TeacherExperienceSeparatorItemProps {
  experiences: {
    id: number
    title: string
    company: string
    startDate: string
    endDate: string
    description: string
  }[]
}

const TeacherExperienceSeparatorItem: FC<
  TeacherExperienceSeparatorItemProps
> = ({ experiences }) => {
  return (
    <div>
      {experiences.map((item) => {
        return (
          <div key={item.id} className="border-b-2 border-border_gray py-4">
            <p className="text-lg">{item.company}</p>

            <p className="text-base text-text_gray">{item.title}</p>

            <div className="flex text-text_gray">
              <p className="mr-1 text-base">{item.startDate}</p>
              <p>-</p>
              <p className="ml-1 text-base">{item.endDate}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TeacherExperienceSeparatorItem
