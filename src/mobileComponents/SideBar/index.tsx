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
            <div className="flex items-center px-8 py-2">
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
              {isShowCategories && (
                <div className="top-0 left-0 h-full w-full bg-white">
                  <div className="flex flex-col">
                    {categories.map((category) => (
                      <div key={category.name} className="ml-5">
                        <Link href={category.url}>
                          <div className="flex w-[70vw] items-center px-8 py-2">
                            <span className="mr-2 text-sm">
                              {category.name}
                            </span>
                          </div>
                        </Link>
                        {category.subCategories &&
                          category.subCategories.length > 0 && (
                            <span className="absolute left-[78vw] -mt-6">
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
                        {selectedSubcategory === category.name &&
                          category.subCategories &&
                          category.subCategories.length > 0 && (
                            <div className="ml-8">
                              {category.subCategories.map((subcategory) => (
                                <div
                                  key={subcategory.name}
                                  className="w-[100vw]"
                                >
                                  <Link
                                    href={`${category.url}/${subcategory.url}`}
                                  >
                                    <div className=" py-2">
                                      <p className="font-sm relative block rounded px-8  text-sm transition duration-200">
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
          </div>
          <div className="col-span-1 mr-12 mt-1 flex items-start justify-end py-2">
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
        {loggedInUser && (
          <>
            <div className="px-8 py-2">
              <hr className="border-border_gray" />
            </div>
            {profileBtnsSectionOne
              .concat(profileBtnsSectionTwo)
              .map((item: { id: number; text: string; url: string }) => (
                <Link key={item.url} href={item.url}>
                  <div className="relative z-0">
                    <p
                      className={`hover:text-gray-400 relative block rounded px-8 py-2 text-sm font-medium transition duration-200 ${
                        item.url === pathname ? 'text-sky' : 'text-text_gray'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
          </>
        )}
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
