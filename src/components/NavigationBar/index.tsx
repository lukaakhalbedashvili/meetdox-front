'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NavigationBarItem from '@/elements/NavigationBarItems'
import navigationBarItems from '@/data/navigationBarItems'
import NeoBrutButton from '@/elements/NeoBrutButton'
import navigationBarAuthItems from '@/data/navigationBarAuthItems'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-vannila ">
      <div className="mx-auto h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center">
                <div className="mr-2">
                  <Image
                    className="hover:rotate-45"
                    src="/apple.png"
                    alt="My Logo"
                    width={40}
                    height={40}
                  />
                </div>
              </span>
            </Link>
            <div className="hidden ml-8 md:flex md:items-center md:space-x-8">
              {navigationBarItems.map((item) => (
                <NavigationBarItem
                  key={item.path}
                  href={item.path}
                  activePath={pathname}
                >
                  {item.name}
                </NavigationBarItem>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigationBarAuthItems.map((item) => (
                <NeoBrutButton key={item.name}>
                  <p className="w-[130px] h-[40px] flex items-center justify-center">
                    {item.name}
                  </p>
                </NeoBrutButton>
              ))}
            </div>
            <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="w-6 h-6" aria-hidden="true" />
              ) : (
                <FaBars className="w-6 h-6" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 h-screen">
            {navigationBarItems.map((item) => (
              <NavigationBarItem
                key={item.path}
                href={item.path}
                activePath={pathname}
              >
                {item.name}
              </NavigationBarItem>
            ))}
            {navigationBarAuthItems.map((item) => (
              <div className="w-50 h-10 ml-8 " key={item.name}>
                <NeoBrutButton>
                  <p className="w-[130px] h-[40px] flex items-center justify-center">
                    {item.name}
                  </p>
                </NeoBrutButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar
