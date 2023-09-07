import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-footer_blue font-normal">
      <div className="w-full px-6  py-4 sm:px-12">
        <div className="flex flex-wrap justify-start">
          <div className="mb-8 w-full md:mb-0 md:w-1/3 lg:w-auto">
            <div className="flex items-center">
              <Image
                src="/octopusWhite.png"
                width={45}
                height={45}
                alt="cow"
                className="mr-2"
              />

              <span className="text-lg font-normal text-white">Meetdox</span>
            </div>

            <p className="mt-2 text-sm text-footer_text sm:w-80">
              Welcome to Meetdox, your ultimate online destination for
              connecting with experts across a wide range of fields!
            </p>
          </div>

          <div className="mb-8 mt-3 w-full sm:ml-20 md:mb-0 md:w-1/4 lg:w-auto">
            <h3 className=" mb-4 text-base font-normal text-white">About Us</h3>

            <ul className="list-none text-sm text-footer_text">
              <li className="mt-3">
                <Link
                  href="/about"
                  className="transition duration-300 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li className="mt-3">
                <Link
                  href="/faq"
                  className="transition duration-300 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 mt-3 w-full sm:ml-20 md:mb-0 md:w-1/4 lg:w-auto">
            <h3 className=" mb-4 text-base font-normal text-white">
              Documents
            </h3>

            <ul className="list-none text-sm text-footer_text">
              <li className="mt-3">
                <Link
                  href="/terms-and-conditions"
                  className="transition duration-300 hover:text-white"
                >
                  Terms and conditions
                </Link>
              </li>

              <li className="mt-3">
                <Link
                  href="/privacy-policy"
                  className="transition duration-300 hover:text-white"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 mt-3 w-full sm:ml-20 md:mb-0 md:w-1/4 lg:w-auto">
            <h3 className=" mb-4 text-base font-normal text-white">Contact</h3>

            <ul className="list-none text-sm text-footer_text">
              <li className="mt-3">
                <div className="transition duration-300 hover:text-white">
                  +995 595 20 62 09
                </div>
              </li>

              <li className="mt-3">
                <div className="transition duration-300 hover:text-white">
                  admin@meetdox.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-footer_text pt-4 sm:items-center md:flex md:justify-between">
          <div>
            <p className="text-sm text-footer_text">
              All rights reserved &copy; 2023 LLC MEETDOX
            </p>
          </div>

          <div className="mt-4 flex  items-center justify-start sm:mt-0">
            <Link
              href="https://twitter.com/meetdoxx"
              className="mr-4 text-white"
              target="_blank"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953,4.049c-0.896,0.394-1.855,0.658-2.853,0.777c1.025-0.614,1.809-1.583,2.176-2.738c-0.957,0.567-2.018,0.977-3.139,1.195c-0.898-0.957-2.177-1.555-3.593-1.555c-2.719,0-4.922,2.203-4.922,4.922c0,0.386,0.043,0.761,0.127,1.122C8.074,8.818,4.299,6.422,1.74,3.305C1.299,4.055,1.016,4.973,1.016,5.967c0,1.71,0.871,3.218,2.195,4.101c-0.807-0.027-1.566-0.248-2.227-0.614v0.061c0,2.389,1.693,4.379,3.943,4.83c-0.414,0.113-0.848,0.171-1.295,0.171c-0.315,0-0.623-0.027-0.926-0.078c0.623,1.954,2.426,3.379,4.569,3.414c-1.674,1.316-3.786,2.098-6.072,2.098c-0.395,0-0.789-0.023-1.176-0.068c2.168,1.391,4.738,2.203,7.514,2.203c9.014,0,13.94-7.474,13.94-13.94c0-0.211,0-0.422-0.014-0.633C22.763,5.909,23.447,5.521,23.953,4.049z"></path>
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/meetdox"
              target="_blank"
              className="text-white transition duration-300 hover:text-footer_text"
            >
              <div className="relative h-7 w-7">
                <Image src="/linkedin.png" alt="linkedin" fill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
