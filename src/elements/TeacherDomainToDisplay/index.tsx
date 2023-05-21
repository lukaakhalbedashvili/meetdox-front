import React, { FC } from 'react'

interface TeacherDomainToDisplayProps {
  subDomains: string[]
}

const TeacherDomainToDisplay: FC<TeacherDomainToDisplayProps> = ({
  subDomains,
}) => {
  return (
    <div className="border-t-[1px] border-border_gray px-4 py-6">
      <h2 className="text-xl font-medium">Developer</h2>

      <div className="mt-1 flex flex-wrap">
        {subDomains &&
          subDomains.map((item) => {
            return (
              <div key={item} className="flex flex-wrap">
                <p className="mr-4 font-medium">{item}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TeacherDomainToDisplay
