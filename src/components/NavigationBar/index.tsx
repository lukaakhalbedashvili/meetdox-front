'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NavigationBarItem from '@/elements/NavigationBarItem'
import navigationBarItems from '@/data/navigationBarItems'
import Button from '@/elements/Button'
import PopupItemWrapper from '../PopupItemWrapper'
import SignUp from '../SignUp'
import LogIn from '../LogIn'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false)
  const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false)

  return (
    <>
      <nav className="bg-gray border-border_gray border-b-2">
        <div className="mx-auto h-[60px] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[60px]">
            <div className="flex items-center">
              <Link href="/">
                <span className="flex items-center">
                  <div className="mr-2">
                    <Image
                      className="hover:rotate-12"
                      src="/cow.svg"
                      alt="My Logo"
                      width={65}
                      height={65}
                    />
                  </div>
                </span>
              </Link>
              <div className="hidden ml-2 md:flex md:items-center md:space-x-8">
                {navigationBarItems.map((item) => (
                  <NavigationBarItem
                    key={item.path}
                    href={item.path}
                    activePath={pathname!}
                  >
                    {item.name}
                  </NavigationBarItem>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex md:items-center md:space-x-4 mr-5">
                <Button
                  customTailwindClasses="bg-transparent border-transparent text-sky"
                  onClickHandler={() => setIsSignUpPopupOpen(true)}
                >
                  <p className="font-medium	w-[90px] h-[45px] flex items-center justify-center">
                    Sign up
                  </p>
                </Button>

                <Button
                  customTailwindClasses="bg-sky border-sky text-black"
                  onClickHandler={() => setIsLogInPopupOpen(true)}
                >
                  <p className="font-medium w-[90px] h-[30px] flex items-center justify-center text-white">
                    Log In
                  </p>
                </Button>
              </div>

              <div
                className="flex md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
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
                  activePath={pathname!}
                >
                  {item.name}
                </NavigationBarItem>
              ))}

              <div className="w-50 h-10 ml-8">
                <Button customTailwindClasses="bg-sky border-sky text-white">
                  <p className="w-32 h-[40px] flex items-center justify-center">
                    SignUp
                  </p>
                </Button>
              </div>

              <div className="w-50 h-10 ml-8">
                <Button customTailwindClasses="bg-sky border-sky text-white">
                  <p className="w- h-10 flex items-center justify-center">
                    SignIn
                  </p>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isSignUpPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsSignUpPopupOpen(false)}
        >
          <SignUp onClose={() => setIsSignUpPopupOpen(false)} />
        </PopupItemWrapper>
      )}
      {isLogInPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsLogInPopupOpen(false)}
        >
          <LogIn onClose={() => setIsLogInPopupOpen(false)} />
        </PopupItemWrapper>
      )}
    </>
  )
}

export default NavigationBar
