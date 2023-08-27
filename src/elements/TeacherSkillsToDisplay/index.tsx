import React, { FC } from 'react'

interface TeacherSkillsToDisplayProps {
  skills: string[]
}

const TeacherSkillsToDisplay: FC<TeacherSkillsToDisplayProps> = ({
  skills,
}) => {
  return (
    <div className="pt-6">
      <div className="mt-1 flex flex-wrap">
        {skills.length > 0 &&
          skills?.map((item) => {
            return (
              <p
                key={item}
                className="mr-2 mt-2 rounded bg-info_notification_bg px-3   pb-1 pt-1 text-sm text-info_icon_blue
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
