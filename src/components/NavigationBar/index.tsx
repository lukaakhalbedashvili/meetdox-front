'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import NavigationBarItem from '@/elements/NavigationBarItem'
import navigationBarItems from '@/data/navigationBarItems'
import Button from '@/elements/Button'
import { useFetchLoggedInUserData } from '@/reactQuery/getUserData'
import SearchScreen from '@/mobileComponents/Search'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
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
  const [isShowSearchScreen, setIsShowSearchScreen] = useState(false)

  const { data } = useFetchLoggedInUserData()

  const loggedInUser = data?.data.data

  return (
    <>
      <nav className="bg-white">
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
                isShowSearchScreen ? 'translate-x-0' : 'translate-x-full'
              } fixed top-0 right-0 bottom-0 left-0 z-50 flex h-[60px] border-b-[1px] border-border_gray bg-white transition-transform duration-300 md:hidden`}
            >
              <SearchScreen onClose={() => setIsShowSearchScreen(false)} />
            </div>
            <div className="flex md:hidden">
              <div className="mr-6 flex  items-center">
                <AiOutlineSearch
                  className="h-6 w-6"
                  onClick={() => setIsShowSearchScreen(true)}
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
          <div className="md:hidden	">
            <div className="h-screen space-y-1 pt-2 pb-3">
              <div>
                {loggedInUser && (
                  <div className="flex items-center px-8 py-2">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={loggedInUser.photoURL}
                        alt=""
                      />

                      <div className="ml-3">
                        <div className="text-gray-800 text-base font-medium">
                          {loggedInUser.username}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
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
              <div className="px-8 py-2">
                <hr className="border-border_gray" />
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <div className="relative z-0 w-[50px]">
                    <p
                      className={`font-sm relative block rounded px-8 py-2 text-sm font-medium transition duration-200`}
                    >
                      Categories
                    </p>
                  </div>
                </div>
                <div className="col-span-1 mr-12 flex items-center justify-end py-2">
                  <FaChevronDown className="h-4 w-4" />
                </div>
              </div>
              <div className="px-8 py-2">
                <hr className="border-border_gray" />
              </div>
              {profileBtnsSectionOne.map((item: any) => (
                <NavigationBarItem
                  key={item.url}
                  href={item.url}
                  activePath={pathname!}
                >
                  {item.text}
                </NavigationBarItem>
              ))}
              {profileBtnsSectionTwo.map((item: any) => (
                <NavigationBarItem
                  key={item.url}
                  href={item.url}
                  activePath={pathname!}
                >
                  {item.text}
                </NavigationBarItem>
              ))}

              <div className="px-8 py-2">
                <hr className="border-border_gray" />
              </div>
              {!loggedInUser && (
                <div className="px-8 py-2">
                  <div className="flex items-center justify-center">
                    <Button
                      customTailwindClasses="bg-transparent border-transparent text-sky"
                      onClickHandler={() => setIsSignUpPopupOpen(true)}
                    >
                      <p className="flex	h-[45px] w-[90px] items-center justify-center font-medium">
                        Sign up
                      </p>
                    </Button>
                    <div className="mx-2"></div>
                    <Button
                      customTailwindClasses="bg-sky border-sky text-text_gray"
                      onClickHandler={() => setIsLogInPopupOpen(true)}
                    >
                      <p className="flex h-[35px] w-[90px] items-center justify-center font-medium text-white">
                        Log In
                      </p>
                    </Button>
                  </div>
                </div>
              )}
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
