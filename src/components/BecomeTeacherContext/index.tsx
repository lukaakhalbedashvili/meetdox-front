'use client'
import React, { createContext, FC, useState } from 'react'
import {
  BecameTeacherContextSections,
  BecomeTeacherContextProps,
  BecomeTeacherContextValue,
} from './becameTeacherContext.interface'

export const becameTeacherContext = createContext<BecomeTeacherContextValue>({
  sectionsWhereErrorHappened: {
    personalData: false,
  },
  setSectionsWhereErrorHappened: undefined,
})

const BecomeTeacherContext: FC<BecomeTeacherContextProps> = ({ children }) => {
  const [sectionsWhereErrorHappened, setSectionsWhereErrorHappened] =
    useState<BecameTeacherContextSections>()
  const value = { sectionsWhereErrorHappened, setSectionsWhereErrorHappened }

  return (
    <becameTeacherContext.Provider value={value}>
      {children}
    </becameTeacherContext.Provider>
  )
}

export default BecomeTeacherContext
