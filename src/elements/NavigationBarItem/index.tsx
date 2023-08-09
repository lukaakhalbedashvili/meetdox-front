import Link from 'next/link'
import React, { FC } from 'react'

interface NavigationBarItemProps {
  href: string
  children: React.ReactNode
  activePath: string
}

const NavigationBarItem: FC<NavigationBarItemProps> = ({
  href,
  children,
  activePath,
}) => (
  <Link href={href}>
    <div className="w-18 relative z-0 ">
      <p
        className={`relative block rounded px-4 py-2 text-sm font-medium transition duration-200 hover:text-sky md:px-4 ${
          href === activePath ? 'text-sky' : 'text-text_gray'
        }`}
      >
        {children}
      </p>
    </div>
  </Link>
)

export default NavigationBarItem
