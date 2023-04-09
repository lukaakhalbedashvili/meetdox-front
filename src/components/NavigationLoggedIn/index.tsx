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
  } = useNavigationLoggedIn()
  return (
    <>
      <div className="flex items-center">
        <div className="relative">
          <button
            className="flex items-center justify-center bg-gray-700 rounded-full h-10 w-10 mr-4 hover:bg-blue-500 transition-colors duration-300 "
            onClick={handleNotificationsClick}
          >
            <BiBell
              className={` h-6 w-6 transition-colors hover:text-sky duration-300 ${
                isNotificationsOpen ? ' text-sky' : 'text-text_gray'
              }`}
            />
            <div className="absolute right-5 top-1 h-2 w-2 bg-error rounded-full"></div>
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 w-96 mt-1 py-2 bg-white  rounded-sm border-[1px] border-border_gray z-10">
              <div className="px-4 py-1 pb-2 flex items-start border-1 border-border_gray border-solid border-b-[1px]">
                <BiBell className="h-5 w-5 text-text_gray mr-2" />
                <p
                  className="text-sm
                "
                >
                  Notifications ({notifications.length})
                </p>
              </div>
              <div className="flex flex-col bg-empty_gray overflow-y-scroll max-h-80">
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
            className="flex items-center justify-center bg-gray-700 rounded-full h-10 w-10 hover:bg-blue-500 transition-colors duration-300"
            onClick={handleProfileClick}
          >
            <ProfileCircledPic
              photoUrl={photoUrl}
              username={username}
              diameter={8}
            />
          </button>
          {isProfileOpen && (
            <div
              className="absolute right-0 w-64 mt-1 py-2 bg-white rounded-sm border-[1px] border-border_gray z-10"
              ref={profileDropdownRef}
            >
              <div className="flex flex-col items-center pt-2 pb-2 px-4  bg-white">
                <ProfileCircledPic
                  photoUrl={photoUrl}
                  username={username}
                  diameter={10}
                />

                <p className="text-sm mt-2">{username}</p>
              </div>
              <div className="px-4 mb-1 mt-2 flex items-start border-border_gray border-b-[1px]"></div>
              {profileBtnsSectionOne.map((btn) => {
                const { Icon } = btn
                return (
                  <ProfileModuleSingleBtn
                    id={btn.id}
                    key={btn.id}
                    text={btn.text}
                    url={btn.url}
                  >
                    <Icon className="h-5 w-5" />
                  </ProfileModuleSingleBtn>
                )
              })}

              <div className="px-4 mb-1 mt-1 flex items-start border-border_gray border-b-[1px]"></div>
              {profileBtnsSectionTwo.map((btn) => {
                const { Icon } = btn
                return (
                  <ProfileModuleSingleBtn
                    id={btn.id}
                    key={btn.id}
                    text={btn.text}
                    url={btn.url}
                  >
                    <Icon className="h-5 w-5" />
                  </ProfileModuleSingleBtn>
                )
              })}

              <div className="px-4 mb-1 mt-1 flex items-start border-border_gray border-b-[1px]"></div>
              <div
                className="px-4 pt-2 pb-2 flex items-start hover:bg-gray cursor-pointer"
                onClick={handleLogout}
              >
                <BiLogOut className="h-5 w-5 text-text_gray" />
                <p className="text-sm ml-3 ">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavigationLoggedIn
