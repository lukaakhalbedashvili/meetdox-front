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
    <div className="relative z-0 w-[50px]">
      <p
        className={`hover:text-gray-400 relative block rounded px-4 py-2 text-sm font-medium transition duration-200 md:px-8 ${
          href === activePath ? 'text-sky' : 'text-text_gray'
        }`}
      >
        {children}
      </p>
    </div>
  </Link>
)

export default NavigationBarItem
