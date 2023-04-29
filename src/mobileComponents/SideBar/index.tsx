import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import navigationBarItems from '@/data/navigationBarItems'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
import Button from '@/elements/Button'
import NavigationBarItem from '@/elements/NavigationBarItem'

interface Props {
  loggedInUser: any
  pathname: string
  setIsSignUpPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsLogInPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = ({
  loggedInUser,
  pathname,
  setIsSignUpPopupOpen,
  setIsLogInPopupOpen,
}: Props) => {
  return (
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
  )
}

export default SideBar
