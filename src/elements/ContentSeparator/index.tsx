import React from 'react'

interface ContentSeparatorProps<T> {
  children: React.ReactNode
  sections: T[]
  activeSection?: T
  handleChange: (section: T) => void
}

const ContentSeparator = <T,>({
  children,
  sections,
  activeSection,
  handleChange,
}: ContentSeparatorProps<T>) => {
  return (
    <div>
      <div className="flex border-b-2 border-border_gray">
        {sections.map((item) => {
          const isItString = typeof item === 'string'
          return (
            isItString && (
              <div
                key={item}
                className="relative flex w-full cursor-pointer items-center justify-center pb-3"
                onClick={() => handleChange(item)}
              >
                <p className="text-base">{item}</p>

                {activeSection === item && (
                  <div className="absolute -bottom-[2px] w-full rounded-md border-b-4 border-sky"></div>
                )}
              </div>
            )
          )
        })}
      </div>

      <div>{children}</div>
    </div>
  )
}

export default ContentSeparator
