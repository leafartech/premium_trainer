import {
  ComputerDesktopIcon,
  HomeIcon,
  UsersIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline'
import { useNavbar } from '@/hooks/useNavbar'
import NavbarLink from '../NavbarLink'
import Image from 'next/image'
import NavbarToggle from '../NavbarToggle'

const NavbarItems = () => {
  const { navbarToggle } = useNavbar()

  return (
    <>
      <NavbarToggle />
      <ul
        className={`sm:ms-24 transition duration-300 w-screen space-y-4 top-0 p-4 bg-black absolute min-h-screen md:min-h-full md:bg-transparent md:transform-none
         md:p-3 md:w-[600px] md:flex md:h-full md:relative md:space-y-0 md:justify-around md:right-4 md:items-center ${
           !navbarToggle ? 'translate-x-full' : 'translate-x-0'
         } `}
      >
        <li>
          <NavbarLink href="/">
            <HomeIcon className="w-6 h-6 md:hidden" />
            Início
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href="/avaliacao-fisica">
            <IdentificationIcon className="w-6 h-6 md:hidden" />
            Avaliação física
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href="/consultoria-presencial">
            <UsersIcon className="w-6 h-6 md:hidden" />
            Consultoria Presencial
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
