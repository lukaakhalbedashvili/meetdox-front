import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-footer_blue font-normal ">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
            <div className="flex items-center">
              <Image
                src="/cow.png"
                width={35}
                height={35}
                alt="cow"
                className="mr-2"
              />

              <span className="text-white text-lg font-normal">My Website</span>
            </div>
            <p className="text-footer_text text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-auto mb-8 md:mb-0">
            <h3 className=" text-white text-base font-normal mb-4">
              Categories
            </h3>
            <ul className="list-none text-footer_text text-sm">
              <li className="mt-3">
                <Link
                  href="/category1"
                  className="hover:text-white transition duration-300"
                >
                  Category 1
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/category2"
                  className="hover:text-white transition duration-300"
                >
                  Category 2
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/category3"
                  className="hover:text-white transition duration-300"
                >
                  Category 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-auto mb-8 md:mb-0">
            <h3 className="text-white text-base font-normal mb-4">
              Subcategories
            </h3>
            <ul className="list-none text-footer_text text-sm">
              <li className="mt-3">
                <Link
                  href="/subcategory1"
                  className="hover:text-white transition duration-300"
                >
                  Subcategory 1
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/subcategory2"
                  className="hover:text-white transition duration-300"
                >
                  Subcategory 2
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/subcategory3"
                  className=" hover:text-white transition duration-300"
                >
                  Subcategory 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-auto">
            <h3 className="text-white text-base font-normal mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-2/3 lg:w-auto px-4 py-2 rounded-md -mr-2 mb-2 md:mb-0 text-white bg-footer_blue_lite focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-sky text-white py-2 px-4 rounded-r hover:bg-gray-100 transition duration-300 text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-footer_text pt-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-footer_text">
              All rights reserved &copy; 2023 My Website
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center list-none">
              <li className="mr-6">
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-footer_text transition duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953,4.049c-0.896,0.394-1.855,0.658-2.853,0.777c1.025-0.614,1.809-1.583,2.176-2.738c-0.957,0.567-2.018,0.977-3.139,1.195c-0.898-0.957-2.177-1.555-3.593-1.555c-2.719,0-4.922,2.203-4.922,4.922c0,0.386,0.043,0.761,0.127,1.122C8.074,8.818,4.299,6.422,1.74,3.305C1.299,4.055,1.016,4.973,1.016,5.967c0,1.71,0.871,3.218,2.195,4.101c-0.807-0.027-1.566-0.248-2.227-0.614v0.061c0,2.389,1.693,4.379,3.943,4.83c-0.414,0.113-0.848,0.171-1.295,0.171c-0.315,0-0.623-0.027-0.926-0.078c0.623,1.954,2.426,3.379,4.569,3.414c-1.674,1.316-3.786,2.098-6.072,2.098c-0.395,0-0.789-0.023-1.176-0.068c2.168,1.391,4.738,2.203,7.514,2.203c9.014,0,13.94-7.474,13.94-13.94c0-0.211,0-0.422-0.014-0.633C22.763,5.909,23.447,5.521,23.953,4.049z"></path>
                  </svg>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-footer_text transition duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953,4.049c-0.896,0.394-1.855,0.658-2.853,0.777c1.025-0.614,1.809-1.583,2.176-2.738c-0.957,0.567-2.018,0.977-3.139,1.195c-0.898-0.957-2.177-1.555-3.593-1.555c-2.719,0-4.922,2.203-4.922,4.922c0,0.386,0.043,0.761,0.127,1.122C8.074,8.818,4.299,6.422,1.74,3.305C1.299,4.055,1.016,4.973,1.016,5.967c0,1.71,0.871,3.218,2.195,4.101c-0.807-0.027-1.566-0.248-2.227-0.614v0.061c0,2.389,1.693,4.379,3.943,4.83c-0.414,0.113-0.848,0.171-1.295,0.171c-0.315,0-0.623-0.027-0.926-0.078c0.623,1.954,2.426,3.379,4.569,3.414c-1.674,1.316-3.786,2.098-6.072,2.098c-0.395,0-0.789-0.023-1.176-0.068c2.168,1.391,4.738,2.203,7.514,2.203c9.014,0,13.94-7.474,13.94-13.94c0-0.211,0-0.422-0.014-0.633C22.763,5.909,23.447,5.521,23.953,4.049z"></path>
                  </svg>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-footer_text transition duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953,4.049c-0.896,0.394-1.855,0.658-2.853,0.777c1.025-0.614,1.809-1.583,2.176-2.738c-0.957,0.567-2.018,0.977-3.139,1.195c-0.898-0.957-2.177-1.555-3.593-1.555c-2.719,0-4.922,2.203-4.922,4.922c0,0.386,0.043,0.761,0.127,1.122C8.074,8.818,4.299,6.422,1.74,3.305C1.299,4.055,1.016,4.973,1.016,5.967c0,1.71,0.871,3.218,2.195,4.101c-0.807-0.027-1.566-0.248-2.227-0.614v0.061c0,2.389,1.693,4.379,3.943,4.83c-0.414,0.113-0.848,0.171-1.295,0.171c-0.315,0-0.623-0.027-0.926-0.078c0.623,1.954,2.426,3.379,4.569,3.414c-1.674,1.316-3.786,2.098-6.072,2.098c-0.395,0-0.789-0.023-1.176-0.068c2.168,1.391,4.738,2.203,7.514,2.203c9.014,0,13.94-7.474,13.94-13.94c0-0.211,0-0.422-0.014-0.633C22.763,5.909,23.447,5.521,23.953,4.049z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
