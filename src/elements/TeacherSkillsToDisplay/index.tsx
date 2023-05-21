import React, { FC } from 'react'

interface TeacherSkillsToDisplayProps {
  header: string
  skills: string[]
}

const TeacherSkillsToDisplay: FC<TeacherSkillsToDisplayProps> = ({
  header,
  skills,
}) => {
  return (
    <div className="pt-6">
      <h2 className="text-xl font-medium">{header}</h2>

      <div className="mt-1 flex flex-wrap">
        {skills.map((item) => {
          return (
            <p
              key={item}
              className="mt-2 mr-2 rounded bg-info_notification_bg px-3   pt-1 pb-1 text-sm text-info_icon_blue
              "
            >
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TeacherSkillsToDisplay
