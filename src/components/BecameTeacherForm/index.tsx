'use client'
import React, { useContext } from 'react'
import { becameTeacherContext } from '../BecomeTeacherContext'
import TeacherPersonalInfo from '../TeacherPersonalInfo'

const BecameTeacherForm = () => {
  const { sectionsWhereErrorHappened } = useContext(becameTeacherContext)
  console.error(sectionsWhereErrorHappened, 'temporary for demo purposes')

  return <TeacherPersonalInfo />
}

export default BecameTeacherForm
