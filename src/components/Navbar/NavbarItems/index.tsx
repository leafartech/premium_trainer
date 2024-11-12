'use client'

import { ComputerDesktopIcon, HomeIcon } from '@heroicons/react/24/outline'
import NavbarLink from '../NavbarLink'
import Image from 'next/image'
import { useState } from 'react'

const NavbarItems = () => {
  const [navbarToggle, setNavbarToggle] = useState(false)

  function toggleNavbar() {
    setNavbarToggle((prevState) => !prevState)
  }

  return (
    <>
      <button
        className="cursor-pointer md:hidden absolute right-3 h-4 w-6 flex justify-between items-center flex-col z-10"
        onClick={toggleNavbar}
        type="button"
      >
        <div
          className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
            navbarToggle &&
            'absolute rotate-[-45deg] top-[50%] translate-y-[-50%]'
          } `}
        />
        <div
          className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
            navbarToggle && 'opacity-0'
          }`}
        />
        <div
          className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
            navbarToggle &&
            'absolute rotate-[45deg] bottom-[50%] translate-y-[50%]'
          }`}
        />
      </button>
      <ul
        className={`sm:ms-24 transition duration-300 w-screen space-y-4 top-0 p-4 bg-black absolute min-h-screen md:min-h-full md:bg-transparent md:transform-none
         md:p-3 md:w-[600px] md:flex md:h-full md:relative md:space-y-0 md:gap-x-4 md:right-4 md:items-center ${
           navbarToggle ? 'translate-x-0' : 'translate-x-full'
         } `}
      >
        <li>
          <NavbarLink href="/">
            <HomeIcon className="w-6 h-6 md:hidden" />
            Início
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href="/consultoria-online">
            <ComputerDesktopIcon className="w-6 h-6 md:hidden" />
            Consultoria Online
          </NavbarLink>
        </li>
        <li
          className={`w-full md:hidden text-brandWhite ${
            navbarToggle ? 'flex justify-center items-center' : 'hidden'
          } `}
        >
          <div className="mt-16">
            <Image
              src="/images/logo01.png"
              alt="Logo do João Navarro"
              width={40}
              height={48}
              quality={100}
            />
          </div>
        </li>
      </ul>
    </>
  )
}

export default NavbarItems
