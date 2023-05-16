import React, { FC } from 'react'

interface TeacherEducationSeparatorProps {
  educations: {
    id: number
    university: string
    major: string
    startDate: string
    endDate: string
  }[]
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
            <p className="text-lg">{item.university}</p>

            <p className="text-base text-text_gray">{item.major}</p>

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

export default TeacherEducationSeparator
