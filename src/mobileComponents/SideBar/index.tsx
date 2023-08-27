import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import navigationBarItems from '@/data/navigationBarItems'
import {
  profileBtnsSectionOne,
  profileBtnsSectionTwo,
} from '@/data/profileModuleItems'
import Button from '@/elements/Button'
import NavigationBarItem from '@/elements/NavigationBarItem'
import { categories } from '@/data/categoryItems'
import handleLogout from '@/utils/services/handleLogout'
import { UserFromUserData } from '@/reactQuery/getUserData/getUserData.interface'
import PopupItemWrapper from '@/components/PopupItemWrapper'
import CashOutPopup from '@/components/CashOutPopup'
import SendFeedbackPopup from '@/components/SendFeedbackPopup'

interface Props {
  loggedInUser: UserFromUserData | undefined
  pathname: string
  setIsSignupPopupOpen: (payload: boolean) => void
  setIsLogInPopupOpen: (isPopupOpen: boolean) => void
}

const SideBar = ({
  loggedInUser,
  pathname,
  setIsSignupPopupOpen,
  setIsLogInPopupOpen,
}: Props) => {
  const [isShowCategories, setIsShowCategories] = useState(false)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  )
  const [isSendFeedbackModalOpen, setIsSendFeedbackModalOpen] = useState(false)
  const [isCashOutModalOpen, setIsCashOutModalOpen] = useState(false)

  const router = useRouter()

  return (
    <div className="md:hidden	">
      <div className="min-h-screen space-y-1 pb-3 pt-2 ">
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
                      <Link href={`/category/${category.url}`}>
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
                              <Link
                                href={`/category/${
                                  category.url
                                }?sub-categories=${encodeURIComponent(
                                  [subcategory.url].join(',')
                                )}`}
                              >
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
            {profileBtnsSectionOne(loggedInUser.isTeacher, loggedInUser.uid)
              .concat(profileBtnsSectionTwo)
              .map((item: { id: number; text: string; url: string }) => {
                return (
                  <div
                    key={item.url}
                    onClick={() => {
                      if (item.id === 4) {
                        setIsCashOutModalOpen(true)
                      } else if (item.id === 5) {
                        setIsSendFeedbackModalOpen(true)
                      } else {
                        router.push(item.url)
                      }
                    }}
                  >
                    <div className="relative z-0">
                      <p
                        className={`hover:text-gray-400 relative block rounded px-4 py-2 text-sm font-medium transition duration-200 ${
                          item.url === pathname ? 'text-sky' : 'text-text_gray'
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            <div className="px-4 py-2">
              <hr className="border-border_gray" />
            </div>
            <div
              className="flex cursor-pointer items-start px-4 pb-2 pt-2 hover:bg-gray"
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
                  onClickHandler={() => setIsSignupPopupOpen(true)}
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
            uid={loggedInUser!.uid}
          />
        </PopupItemWrapper>
      )}
    </div>
  )
}

export default SideBar
