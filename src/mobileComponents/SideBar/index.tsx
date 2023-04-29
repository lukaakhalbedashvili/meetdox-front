import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'
import navigationBarItems from '@/data/navigationBarItems'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
import Button from '@/elements/Button'
import NavigationBarItem from '@/elements/NavigationBarItem'
import { categories } from '@/data/categoryItems'
import handleLogout from '@/utils/services/handleLogout'

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
  const [isShowCategories, setIsShowCategories] = useState(false)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  )

  return (
    <div className="md:hidden	">
      <div className="min-h-screen space-y-1 pt-2 pb-3 ">
        <div>
          {loggedInUser && (
            <div className="flex items-center px-4 py-2">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={loggedInUser.photoURL}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base  text-text_gray">
                  {loggedInUser.username}
                </div>
                <div className="text-sm  text-lite">{loggedInUser.email}</div>
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
        <div className="px-4 py-2">
          <hr className="border-border_gray" />
        </div>

        <div className="relative z-0 w-full px-4">
          <div className="flex items-center justify-between">
            <p
              className={`font-sm relative block rounded py-2 text-sm font-medium transition duration-200`}
            >
              Categories
            </p>

            <div>
              {isShowCategories ? (
                <FaChevronUp
                  className="h-4 w-4"
                  onClick={() => setIsShowCategories(false)}
                />
              ) : (
                <FaChevronDown
                  className="h-4 w-4"
                  onClick={() => setIsShowCategories(true)}
                />
              )}
            </div>
          </div>

          {isShowCategories && (
            <div className="w-full bg-white">
              <div className="flex flex-col">
                {categories.map((category) => (
                  <div key={category.name} className="">
                    <div className="ml-8 flex items-center justify-between py-2">
                      <Link href={category.url}>
                        <span className="mr-2 text-sm">{category.name}</span>
                      </Link>

                      {category.subCategories &&
                        category.subCategories.length > 0 && (
                          <span>
                            {selectedSubcategory === category.name ? (
                              <FaChevronUp
                                className="h-4 w-4"
                                onClick={() => setSelectedSubcategory(null)}
                              />
                            ) : (
                              <FaChevronDown
                                className="h-4 w-4"
                                onClick={() =>
                                  setSelectedSubcategory(category.name)
                                }
                              />
                            )}
                          </span>
                        )}
                    </div>

                    {selectedSubcategory === category.name &&
                      category.subCategories &&
                      category.subCategories.length > 0 && (
                        <div className="ml-8">
                          {category.subCategories.map((subcategory) => (
                            <div key={subcategory.name} className="">
                              <Link href={`${category.url}/${subcategory.url}`}>
                                <div className="py-2">
                                  <p className="font-sm relative rounded px-8  text-sm transition duration-200">
                                    {subcategory.name}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {loggedInUser && (
          <>
            <div className="px-4 py-2">
              <hr className="border-border_gray" />
            </div>
            {profileBtnsSectionOne
              .concat(profileBtnsSectionTwo)
              .map((item: { id: number; text: string; url: string }) => (
                <Link key={item.url} href={item.url}>
                  <div className="relative z-0">
                    <p
                      className={`hover:text-gray-400 relative block rounded px-4 py-2 text-sm font-medium transition duration-200 ${
                        item.url === pathname ? 'text-sky' : 'text-text_gray'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            <div className="px-4 py-2">
              <hr className="border-border_gray" />
            </div>
            <div
              className="flex cursor-pointer items-start px-4 pt-2 pb-2 hover:bg-gray"
              onClick={handleLogout}
            >
              <p className="text-sm ">Logout</p>
            </div>
          </>
        )}

        {!loggedInUser && (
          <>
            <div className="px-4 py-2">
              <hr className="border-border_gray" />
            </div>
            <div className="px-4 py-2">
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
          </>
        )}
      </div>
    </div>
  )
}

export default SideBar
