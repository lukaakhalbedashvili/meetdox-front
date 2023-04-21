'use client'

import { BiBell, BiLogOut } from 'react-icons/bi'
import NotificationModuleSingleBtn from '@/elements/NotificationModuleSingleBtn'
import ProfileModuleSingleBtn from '@/elements/ProfileModuleSingleBtn'
import ProfileCircledPic from '@/elements/ProfileCircledPic'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
import useNavigationLoggedIn from './useNavigationLoggedIn'

interface NavigationLoggedInProps {
  photoUrl: string
  username: string
}

const NavigationLoggedIn = ({
  photoUrl,
  username,
}: NavigationLoggedInProps) => {
  const {
    handleLogout,
    handleNotificationsClick,
    handleProfileClick,
    isNotificationsOpen,
    isProfileOpen,
    notifications,
    profileDropdownRef,
    userAvatarRef,
    notificationsDropDownRef,
    notificationsIconRef,
    router,
    setIsProfileOpen,
  } = useNavigationLoggedIn()

  return (
    <>
      <div className="flex items-center">
        <div className="relative">
          <button
            className="bg-gray-700 hover:bg-blue-500 mr-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 "
            onClick={handleNotificationsClick}
            ref={notificationsIconRef}
          >
            <BiBell
              className={` h-6 w-6 transition-colors duration-300 hover:text-sky ${
                isNotificationsOpen ? ' text-sky' : 'text-text_gray'
              }`}
            />

            <div className="absolute right-5 top-1 h-2 w-2 rounded-full bg-error"></div>
          </button>
          {isNotificationsOpen && (
            <div
              className="absolute right-0 z-10 mt-1 w-96 rounded-sm  border-[1px] border-border_gray bg-white py-2"
              ref={notificationsDropDownRef}
            >
              <div className="border-1 flex items-start border-b-[1px] border-solid border-border_gray px-4 py-1 pb-2">
                <BiBell className="mr-2 h-5 w-5 text-text_gray" />
                <p
                  className="text-sm
                "
                >
                  Notifications ({notifications.length})
                </p>
              </div>
              <div className="flex max-h-80 flex-col overflow-y-scroll bg-empty_gray">
                {notifications.map((notification) => (
                  <NotificationModuleSingleBtn
                    id={notification.id}
                    key={notification.id}
                    text={notification.text}
                    msTime={notification.msTime}
                    url={notification.url}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="bg-gray-700 hover:bg-blue-500 flex h-10 w-10 items-center justify-center rounded-full bg-sky transition-colors duration-300"
            onClick={handleProfileClick}
            ref={userAvatarRef}
          >
            <ProfileCircledPic
              photoUrl={photoUrl}
              username={username}
              diameter={8}
            />
          </button>
          {isProfileOpen && (
            <div
              className="absolute right-0 z-20 mt-1 w-64 rounded-sm border-[1px] border-border_gray bg-white py-2"
              ref={profileDropdownRef}
            >
              <div className="flex flex-col items-center bg-white px-4 pt-2  pb-2">
                <ProfileCircledPic
                  photoUrl={photoUrl}
                  username={username}
                  diameter={10}
                />

                <p className="mt-2 text-sm">{username}</p>
              </div>
              <div className="mb-1 mt-2 flex items-start border-b-[1px] border-border_gray px-4"></div>

              {profileBtnsSectionOne.map((btn) => {
                const { Icon } = btn
                return (
                  <ProfileModuleSingleBtn
                    onClick={() => {
                      setIsProfileOpen(false)
                      router.push(btn.url)
                    }}
                    key={btn.id}
                    text={btn.text}
                  >
                    <Icon className="h-5 w-5" />
                  </ProfileModuleSingleBtn>
                )
              })}

              <div className="mb-1 mt-1 flex items-start border-b-[1px] border-border_gray px-4"></div>
              {profileBtnsSectionTwo.map((btn) => {
                const { Icon } = btn
                return (
                  <ProfileModuleSingleBtn
                    key={btn.id}
                    text={btn.text}
                    onClick={() => {
                      router.push(btn.url)
                      setIsProfileOpen(false)
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </ProfileModuleSingleBtn>
                )
              })}

              <div className="mb-1 mt-1 flex items-start border-b-[1px] border-border_gray px-4"></div>
              <div
                className="flex cursor-pointer items-start px-4 pt-2 pb-2 hover:bg-gray"
                onClick={handleLogout}
              >
                <BiLogOut className="h-5 w-5 text-text_gray" />
                <p className="ml-3 text-sm ">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavigationLoggedIn
