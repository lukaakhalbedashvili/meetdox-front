import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface BecomeTeacherContextProps {
  children: ReactNode
}

export interface BecameTeacherContextSections {
  personalData: boolean
}

export interface BecomeTeacherContextValue {
  sectionsWhereErrorHappened: BecameTeacherContextSections | undefined
  setSectionsWhereErrorHappened?: Dispatch<
    SetStateAction<BecameTeacherContextSections | undefined>
  >
}
