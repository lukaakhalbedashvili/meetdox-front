'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import NavigationBarItem from '@/elements/NavigationBarItem'
import navigationBarItems from '@/data/navigationBarItems'
import Button from '@/elements/Button'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import SearchScreen from '@/app/mobile_components/SearchScreen'
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
  const [showSearchScreen, setShowSearchScreen] = useState(false)

  const { data } = useFetchLoggedInUserData()

  const loggedInUser = data?.data.data

  return (
    <>
      <nav className=" bg-white">
        <div className="mx-auto h-[60px] border-b-[1px] border-border_gray px-4 sm:px-6 lg:px-12">
          <div className="flex h-[60px] w-full justify-between">
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
              <div className="ml-2 hidden md:flex md:items-center md:space-x-8">
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
                <div className="mr-5 hidden md:flex md:items-center md:space-x-4">
                  <Button
                    customTailwindClasses="bg-transparent border-transparent text-sky"
                    onClickHandler={() => setIsSignUpPopupOpen(true)}
                  >
                    <p className="flex	h-[45px] w-[90px] items-center justify-center font-medium">
                      Sign up
                    </p>
                  </Button>

                  <Button
                    customTailwindClasses="bg-sky border-sky text-text_gray"
                    onClickHandler={() => setIsLogInPopupOpen(true)}
                  >
                    <p className="flex h-[30px] w-[90px] items-center justify-center font-medium text-white">
                      Log In
                    </p>
                  </Button>
                </div>
              </div>
            )}
            <div
              className={`${
                showSearchScreen ? 'translate-x-0' : 'translate-x-full'
              } fixed top-0 right-0 bottom-0 left-0 z-50 h-[60px] border-b-[1px] border-border_gray bg-white transition-transform duration-300`}
            >
              <SearchScreen onClose={() => setShowSearchScreen(false)} />
            </div>
            <div className="flex">
              <div className="mr-6 flex  items-center md:hidden">
                <AiOutlineSearch
                  className="h-6 w-6"
                  onClick={() => setShowSearchScreen(true)}
                />
              </div>
              <div className="flex items-center  md:hidden">
                <div className="flex" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <FaTimes className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="h-6 w-6" aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="h-screen space-y-1 px-2 pt-2 pb-3">
              {navigationBarItems.map((item) => (
                <NavigationBarItem
                  key={item.path}
                  href={item.path}
                  activePath={pathname!}
                >
                  {item.name}
                </NavigationBarItem>
              ))}

              <div className="w-50 ml-8 h-10">
                <Button customTailwindClasses="bg-sky border-sky text-white">
                  <p className="flex h-[40px] w-32 items-center justify-center">
                    SignUp
                  </p>
                </Button>
              </div>

              <div className="w-50 ml-8 h-10">
                <Button customTailwindClasses="bg-sky border-sky text-white">
                  <p className="w- flex h-10 items-center justify-center">
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
