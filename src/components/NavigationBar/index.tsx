'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NavigationBarItem from '@/elements/NavigationBarItem'
import navigationBarItems from '@/data/navigationBarItems'
import Button from '@/elements/Button'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import PopupItemWrapper from '../PopupItemWrapper'
import SignUp from '../SignUp'
import LogIn from '../LogIn'
import ForgotPassword from '../ForgotPassword'
import NavigationLoggedIn from '../NavigationLoggedIn'
import NavigationSearchBar from '../NavigationSearchBar'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false)
  const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false)
  const [isForgotPasswordPopupOpen, setIsForgotPasswordPopupOpen] =
    useState(false)

  const { data } = useFetchLoggedInUserData()

  const loggedInUser = data?.data.data

  return (
    <>
      <nav className="bg-white border-border_gray border-b-[1px]">
        <div className="mx-auto h-[60px] px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between h-[60px] w-full">
            <div className="flex items-center">
              <Link href="/">
                <div className="mr-6">
                  <Image
                    className="hover:rotate-12"
                    src="/cow.png"
                    alt="My Logo"
                    width={40}
                    height={40}
                  />
                </div>
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
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavigationSearchBar />
            </div>
            {loggedInUser ? (
              <NavigationLoggedIn
                photoUrl={loggedInUser.photoURL}
                username={loggedInUser.username}
              />
            ) : (
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
                    customTailwindClasses="bg-sky border-sky text-text_gray"
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
            )}
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
          <SignUp
            onLogInClickHandler={() => setIsLogInPopupOpen(true)}
            onClose={() => setIsSignUpPopupOpen(false)}
          />
        </PopupItemWrapper>
      )}

      {isLogInPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsLogInPopupOpen(false)}
        >
          <LogIn
            onSignUpClickHandler={() => setIsSignUpPopupOpen(true)}
            onClose={() => setIsLogInPopupOpen(false)}
            onForgotPasswordClickHandler={() =>
              setIsForgotPasswordPopupOpen(true)
            }
            setIsLogInPopupOpen={setIsLogInPopupOpen}
          />
        </PopupItemWrapper>
      )}

      {isForgotPasswordPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsForgotPasswordPopupOpen(false)}
        >
          <ForgotPassword
            onLogInClickHandler={() => setIsLogInPopupOpen(true)}
            onClose={() => setIsForgotPasswordPopupOpen(false)}
          />
        </PopupItemWrapper>
      )}
    </>
  )
}

export default NavigationBar
