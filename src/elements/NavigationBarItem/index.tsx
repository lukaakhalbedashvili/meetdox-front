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
    <div className="relative w-[50px] z-0">
      <p
        className={`relative font-medium block px-8 py-2 text-sm hover:text-gray-400 rounded transition duration-200 ${
          href === activePath ? 'text-sky' : 'text-black'
        }`}
      >
        {children}
      </p>
    </div>
  </Link>
)

export default NavigationBarItem
