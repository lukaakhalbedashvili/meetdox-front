import React, { FC } from 'react'
import { TeacherEducation } from '@/components/Catalog/catalog.interface'

interface TeacherEducationSeparatorProps {
  educations: TeacherEducation[]
}

const TeacherEducationSeparator: FC<TeacherEducationSeparatorProps> = ({
  educations,
}) => {
  return (
    <div>
      {educations.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${
              educations.length - 1 !== index && 'border-b-2'
            } border-border_gray py-4`}
          >
            <p className="text-base">{item.university}</p>

            <p className="text-sm text-text_gray">{item.major}</p>

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

export default TeacherEducationSeparator
