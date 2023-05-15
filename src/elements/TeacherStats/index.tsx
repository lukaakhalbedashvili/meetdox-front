import React, { FC } from 'react'

interface TeacherStatsProps {
  totalStudents: number
  hoursInCall: number
  totalEarned: number
}

const TeacherStats: FC<TeacherStatsProps> = ({
  hoursInCall,
  totalEarned,
  totalStudents,
}) => {
  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-col items-start">
        <p className="text-xl font-medium">{totalEarned}$</p>
        <p className="text-sm">Total Earning</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-xl font-medium">{totalStudents}</p>
        <p className="text-sm">Total Students</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-xl font-medium">{hoursInCall}</p>
        <p className="text-sm">Total Hours</p>
      </div>
    </div>
  )
}

export default TeacherStats
