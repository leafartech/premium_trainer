import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import {
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  HomeIcon,
  UsersIcon
} from "@heroicons/react/24/outline"
import Logo from "components/Logo"

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false)
  const router = useRouter()

  function Toggle() {
    setNavbarToggle(!navbarToggle)
  }

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-start z-10">
      <div className="px-2">
        <Logo />
      </div>
      <div
        id="navbar_menu"
        className="cursor-pointer md:hidden absolute right-3 h-5 w-8 flex justify-between items-center flex-col z-10"
        onClick={() => Toggle()}
      >
        <div
          className={`bg-white w-full rounded transition h-[2px] ${
            navbarToggle &&
            "absolute rotate-[-45deg] top-[50%]  translate-y-[-50%]"
          } `}
        ></div>
        <div
          className={`bg-white w-full rounded transition h-[2px] ${
            navbarToggle && "opacity-0"
          }`}
        ></div>
        <div
          className={`bg-white w-full rounded transition h-[2px] ${
            navbarToggle &&
            "absolute rotate-[45deg] bottom-[50%] translate-y-[50%]"
          }`}
        ></div>
      </div>
      <ul
        className={`transition w-screen space-y-4 top-0 p-4 bg-black absolute min-h-screen md:min-h-full md:bg-transparent md:transform-none
         md:p-3 md:w-[600px] md:flex md:h-full md:relative md:space-y-0 md:justify-around md:right-4 md:items-center ${
           !navbarToggle ? "translate-x-full" : "translate-x-0"
         } `}
      >
        <li>
          <Link
            href="/"
            className={`${
              router.pathname === "/" ? "text-brandRed-500" : "text-zinc-300"
            } trasition hover:underline font-medium flex gap-2 items-center `}
          >
            <HomeIcon className="w-6 h-6 md:hidden" />
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/avaliacao-fisica"
            className={`${
              router.pathname === "/avaliacao-fisica"
                ? "text-brandRed-500"
                : "text-zinc-300"
            } trasition hover:text-brandRed-500 hover:underline font-medium flex gap-2 items-center`}
          >
            <ClipboardDocumentCheckIcon className="w-6 h-6 md:hidden" />
            Avaliação física
          </Link>
        </li>
        <li>
          <Link
            href="/consultoria-presencial"
            className={`${
              router.pathname === "/consultoria-presencial"
                ? "text-brandRed-500"
                : "text-zinc-300"
            } trasition hover:text-brandRed-500 hover:underline font-medium flex gap-2 items-center`}
          >
            <UsersIcon className="w-6 h-6 md:hidden" />
            Consultoria Presencial
          </Link>
        </li>
        <li>
          <Link
            href="/consultoria-online"
            className={`${
              router.pathname === "/consultoria-online"
                ? "text-brandRed-500"
                : "text-zinc-300"
            } trasition hover:text-brandRed-500 hover:underline font-medium flex gap-2 items-center`}
          >
            <ComputerDesktopIcon className="w-6 h-6 md:hidden" />
            Consultoria Online
          </Link>
        </li>
        <li
          className={`w-full md:hidden text-white ${
            navbarToggle ? "flex justify-center items-center" : "hidden"
          } `}
        >
          <div>
            <Logo />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
