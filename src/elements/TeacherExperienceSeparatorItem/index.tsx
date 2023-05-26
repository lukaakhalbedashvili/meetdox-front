import React, { FC } from 'react'
import { TeacherExperience } from '@/components/Catalog/catalog.interface'

interface TeacherExperienceSeparatorItemProps {
  experiences: TeacherExperience[]
}

const TeacherExperienceSeparatorItem: FC<
  TeacherExperienceSeparatorItemProps
> = ({ experiences }) => {
  return (
    <div>
      {experiences.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${
              experiences.length - 1 !== index && 'border-b-2'
            } border-border_gray py-4`}
          >
            <p className="text-base">{item.company}</p>

            <p className="text-sm text-text_gray">{item.title}</p>

            <div className="flex text-text_gray">
              <p className="mr-1 text-sm">{item.startDate}</p>
              <p>-</p>
              <p className="ml-1 text-sm">{item.endDate}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TeacherExperienceSeparatorItem
