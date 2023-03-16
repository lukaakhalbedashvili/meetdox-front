"use client"; // this is a client component 👈🏽

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import NavigationBarItem from "@/elements/NavigationBarItems";
import navigationBarItems from "@/data/navigationBarItems";
import { usePathname } from 'next/navigation';
import NeoBrutButton from "@/elements/NeoBrutButton";
import navigationBarAuthItems from "@/data/navigationBarAuthItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white ">
      <div className="mx-auto h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
          <Link href="/">
              <span className="flex items-center">
                <div className="mr-2">
                  <Image className='hover:rotate-45' src="/apple.png" alt="My Logo" width={40} height={40} />
                </div>
              </span>
            </Link>
            <div className="hidden ml-8 md:flex md:items-center md:space-x-8">
              {navigationBarItems.map((item) => (
                <NavigationBarItem key={item.path} href={item.path} activePath={pathname}>
                  {item.name}
                </NavigationBarItem>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {/* <form className="hidden md:block mr-4">
              <input
                type="text"
                placeholder="Search"
                className="py-1 px-2 border rounded"
              />
              <button
                type="submit"
                className="py-1 px-2 bg-gray-800 text-white rounded ml-2"
              >
                Search
              </button>
            </form> */}
            <div className="hidden md:flex md:items-center md:space-x-4">
            {navigationBarAuthItems.map((item) => (
            <NeoBrutButton key={item.name}>
            {item.name}
          </NeoBrutButton>
            ))}

            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600 transition duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <FaTimes className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <FaBars className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationBarItems.map((item) => (
              <NavigationBarItem key={item.path} href={item.path} activePath={pathname} >
                {item.name}
              </NavigationBarItem>
            ))}
            {navigationBarAuthItems.map((item) => (
              <div className='w-50 h-10 ml-8 ' key={item.name}>
                <NeoBrutButton >
                {item.name}
              </NeoBrutButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;