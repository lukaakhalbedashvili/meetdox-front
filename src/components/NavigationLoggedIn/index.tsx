'use client'

import { BiBell, BiLogOut } from 'react-icons/bi'
import NotificationModuleSingleBtn from '@/elements/NotificationModuleSingleBtn'
import ProfileModuleSingleBtn from '@/elements/ProfileModuleSingleBtn'
import ProfileCircledPic from '@/elements/ProfileCircledPic'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
import handleLogout from '@/utils/services/handleLogout'
import { NotificationStructure } from './navigationLoggedIn.interface'
import useNavigationLoggedIn from './useNavigationLoggedIn'
import PopupItemWrapper from '../PopupItemWrapper'
import SendFeedbackPopup from '../SendFeedbackPopup'
import CashOutPopup from '../CashOutPopup'

interface NavigationLoggedInProps {
  photoUrl: string
  username: string
  notifications: NotificationStructure[]
  uid: string
  teacherBalance: number
  isTeacher: boolean
}

const NavigationLoggedIn = ({
  photoUrl,
  username,
  notifications,
  uid,
  teacherBalance,
  isTeacher,
}: NavigationLoggedInProps) => {
  const {
    handleNotificationsClick,
    handleProfileClick,
    isNotificationsOpen,
    isProfileOpen,
    profileDropdownRef,
    userAvatarRef,
    notificationsDropDownRef,
    notificationsIconRef,
    router,
    setIsProfileOpen,
    notificationsList,
    unreadNotificationsNum,
    setLoggedInUser,
    isSendFeedbackModalOpen,
    setIsSendFeedbackModalOpen,
    isCashOutModalOpen,
    setIsCashOutModalOpen,
  } = useNavigationLoggedIn({ uid, notifications })
  return (
    <>
      <div className="hidden items-center md:flex">
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

            {unreadNotificationsNum > 0 && (
              <div className="absolute right-5 top-1 h-2 w-2 rounded-full bg-error"></div>
            )}
          </button>
          {isNotificationsOpen && (
            <div
              className="absolute right-0 z-20 mt-1 w-96 rounded-sm  border-[1px] border-border_gray bg-white py-2"
              ref={notificationsDropDownRef}
            >
              <div className="border-1 flex items-start border-b-[1px] border-solid border-border_gray px-4 py-1 pb-2">
                <BiBell className="mr-2 h-5 w-5 text-text_gray" />
                <p
                  className="text-sm
                "
                >
                  Notifications ({unreadNotificationsNum})
                </p>
              </div>
              <div className="flex max-h-80 flex-col overflow-y-scroll bg-empty_gray">
                {notificationsList.map(
                  (notification: NotificationStructure) => (
                    <NotificationModuleSingleBtn
                      id={notification.id}
                      key={notification.id}
                      text={notification.body}
                      title={notification.title}
                      isRead={notification.read}
                      type={notification.type}
                      msTime={notification.createdAt}
                      url={notification.url}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="bg-gray-700 hover:bg-blue-500 relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
            onClick={handleProfileClick}
            ref={userAvatarRef}
          >
            <ProfileCircledPic photoUrl={photoUrl} />
          </button>

          {isProfileOpen && (
            <div
              className="absolute right-0 z-20 mt-1 w-64 rounded-sm border-[1px] border-border_gray bg-white py-2"
              ref={profileDropdownRef}
            >
              <div className="flex flex-col items-center bg-white px-4 pb-2  pt-2">
                <button className="relative h-10 w-10">
                  <ProfileCircledPic photoUrl={photoUrl} />
                </button>

                <p className="mt-2 text-sm">{username}</p>
                {isTeacher && (
                  <p className="mt-2 text-sm text-text_gray">
                    ${teacherBalance.toFixed(2) || 0}
                  </p>
                )}
              </div>
              <div className="mb-1 mt-2 flex items-start border-b-[1px] border-border_gray px-4"></div>

              {profileBtnsSectionOne(isTeacher, uid).map((btn) => {
                let { Icon } = btn

                return (
                  <ProfileModuleSingleBtn
                    onClick={() => {
                      if (btn.id === 4) {
                        setIsCashOutModalOpen(true)
                      } else {
                        router.push(btn.url)
                      }
                      setIsProfileOpen(false)
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
                      if (btn.id === 5) {
                        setIsSendFeedbackModalOpen(true)
                      } else {
                        router.push(btn.url)
                      }
                      setIsProfileOpen(false)
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </ProfileModuleSingleBtn>
                )
              })}

              <div className="mb-1 mt-1 flex items-start border-b-[1px] border-border_gray px-4"></div>
              <div
                className="flex cursor-pointer items-start px-4 pb-2 pt-2 hover:bg-gray"
                onClick={() => {
                  handleLogout()
                  setLoggedInUser(undefined)
                }}
              >
                <BiLogOut className="h-5 w-5 text-text_gray" />
                <p className="ml-3 text-sm ">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {isCashOutModalOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsCashOutModalOpen(false)}
        >
          <CashOutPopup onClose={() => setIsCashOutModalOpen(false)} />
        </PopupItemWrapper>
      )}
      {isSendFeedbackModalOpen && (
        <PopupItemWrapper
          onOutsideClickHandler={() => setIsSendFeedbackModalOpen(false)}
        >
          <SendFeedbackPopup
            onClose={() => setIsSendFeedbackModalOpen(false)}
            uid={uid}
          />
        </PopupItemWrapper>
      )}
    </>
  )
}

export default NavigationLoggedIn
