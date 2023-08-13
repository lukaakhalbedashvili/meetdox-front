'use client'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import NavigationBarItem from '@/elements/NavigationBarItem'
import navigationBarItems from '@/data/navigationBarItems'
import Button from '@/elements/Button'
import SearchScreen from '@/mobileComponents/Search'
import SideBar from '@/mobileComponents/SideBar'
import MobileNotifications from '@/mobileComponents/MobileNotifications'
import useNavigationBar from './useNavigationBar'
import PopupItemWrapper from '../PopupItemWrapper'
import SignUp from '../SignUp'
import LogIn from '../LogIn'
import ForgotPassword from '../ForgotPassword'
import NavigationLoggedIn from '../NavigationLoggedIn'
import NavigationSearchBar from '../NavigationSearchBar'
import CategoryNav from '../CategoryNav'

const NavigationBar = () => {
  const {
    isOpen,
    setIsOpen,
    pathname,
    isSignupPopupOpen,
    setIsSignupPopupOpen,
    isLogInPopupOpen,
    setIsLogInPopupOpen,
    isForgotPasswordPopupOpen,
    setIsForgotPasswordPopupOpen,
    isShowSearchScreen,
    setIsShowSearchScreen,
    loggedInUser,
    isShowNotificationScreen,
    setIsShowNotificationScreen,
    router,
  } = useNavigationBar()

  return (
    <>
      <nav className="fixed top-0 left-0 z-20  w-full bg-white ">
        <div className="mx-auto h-[50px] border-b-[1px] border-border_gray px-4 sm:px-6 lg:px-12">
          <div className="flex h-full w-full justify-between">
            <div className="flex items-center">
              <Link href="/">
                <div className="mr-6">
                  <Image
                    className="hover:rotate-12"
                    src="/cowWithMakeup.svg"
                    alt="My Logo"
                    width={50}
                    height={50}
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
                teacherBalance={loggedInUser.teacherBalance}
                uid={loggedInUser.uid}
                photoUrl={loggedInUser.photoURL}
                username={loggedInUser.username}
                notifications={loggedInUser.notifications}
                isTeacher={loggedInUser.isTeacher}
              />
            ) : (
              <div className="flex items-center">
                <div className="mr-5 hidden md:flex md:items-center md:space-x-4">
                  <Button
                    customTailwindClasses="bg-transparent border-transparent text-sky"
                    onClickHandler={() => setIsSignupPopupOpen(true)}
                  >
                    <p className="flex	h-[45px] w-[90px] items-center justify-center font-medium">
                      Sign up
                    </p>
                  </Button>

                  <Button
                    customTailwindClasses="bg-sky border-sky text-text_gray"
                    onClickHandler={() => {
                      setIsLogInPopupOpen(true)
                      router.push('/')
                    }}
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
            {loggedInUser && (
              <div
                className={`${
                  isShowNotificationScreen
                    ? 'translate-x-0'
                    : 'translate-x-full'
                } fixed top-0 right-0 bottom-0 left-0 z-50 flex h-full w-full border-b-[1px] border-border_gray bg-white transition-transform duration-300 md:hidden `}
              >
                <MobileNotifications
                  uid={loggedInUser.uid}
                  notifications={loggedInUser.notifications}
                  onClose={() => setIsShowNotificationScreen(false)}
                />
              </div>
            )}

            <div className="flex md:hidden">
              {loggedInUser && (
                <div className="flex items-center">
                  <button
                    onClick={() => setIsShowNotificationScreen(true)}
                    className="bg-gray-700 hover:bg-blue-500 mr-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 "
                  >
                    <BiBell
                      className={` h-6 w-6 text-text_gray transition-colors duration-300 `}
                    />

                    <div className="relative right-1 -top-3 h-2 w-2 rounded-full bg-error"></div>
                  </button>
                </div>
              )}

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

        <CategoryNav />

        {isOpen && (
          <SideBar
            loggedInUser={loggedInUser}
            pathname={pathname}
            setIsSignupPopupOpen={setIsSignupPopupOpen}
            setIsLogInPopupOpen={setIsLogInPopupOpen}
          />
        )}
      </nav>

      {isSignupPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsSignupPopupOpen(false)}
        >
          <SignUp
            onLogInClickHandler={() => setIsLogInPopupOpen(true)}
            onClose={() => setIsSignupPopupOpen(false)}
          />
        </PopupItemWrapper>
      )}

      {isLogInPopupOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsLogInPopupOpen(false)}
        >
          <LogIn
            onSignUpClickHandler={() => setIsSignupPopupOpen(true)}
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
