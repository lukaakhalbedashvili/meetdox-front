import React from 'react'
import BecomeTeacherContext from '@/components/BecomeTeacherContext'
import BecameTeacherForm from '@/components/BecameTeacherForm'

const page = () => {
  return (
    <div className="pt-8">
      <BecomeTeacherContext>
        <BecameTeacherForm />
      </BecomeTeacherContext>
    </div>
  )
}

export default page
