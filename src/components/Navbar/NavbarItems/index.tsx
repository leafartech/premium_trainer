import {
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  HomeIcon,
  UsersIcon
} from "@heroicons/react/24/outline"
import useNavbar from "hooks/useNavbar"
import Link from "next/link"
import { useRouter } from "next/router"

const NavbarItems = () => {
  const { navbarToggle, toggleNavbar } = useNavbar()
  const router = useRouter()

  return (
    <>
      <div
        className="cursor-pointer md:hidden absolute right-3 h-4 w-6 flex justify-between items-center flex-col z-10"
        onClick={toggleNavbar}
      >
        <div
          className={`bg-brandWhite w-full rounded duration-300 h-[1.5px] ${
            navbarToggle &&
            "absolute rotate-[-45deg] top-[50%]  translate-y-[-50%]"
          } `}
        ></div>
        <div
          className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
            navbarToggle && "opacity-0"
          }`}
        ></div>
        <div
          className={`bg-brandWhite w-full rounded duration-300 h-[1.5px] ${
            navbarToggle &&
            "absolute rotate-[45deg] bottom-[50%] translate-y-[50%]"
          }`}
        ></div>
      </div>
      <ul
        className={`sm:ms-24 duration-300 w-screen space-y-4 top-0 p-4 bg-black absolute min-h-screen md:min-h-full md:bg-transparent md:transform-none
         md:p-3 md:w-[600px] md:flex md:h-full md:relative md:space-y-0 md:justify-around md:right-4 md:items-center ${
           !navbarToggle ? "translate-x-full" : "translate-x-0"
         } `}
      >
        <li>
          <Link
            href="/"
            className={`${
              router.pathname === "/"
                ? "text-red-500 font-semibold"
                : "text-white"
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
                ? "text-red-500 font-semibold"
                : "text-white"
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
                ? "text-red-500 font-semibold"
                : "text-white"
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
                ? "text-red-500 font-semibold"
                : "text-white"
            } trasition hover:text-brandRed-500 hover:underline font-medium flex gap-2 items-center`}
          >
            <ComputerDesktopIcon className="w-6 h-6 md:hidden" />
            Consultoria Online
          </Link>
        </li>
        <li
          className={`w-full md:hidden text-brandWhite ${
            navbarToggle ? "flex justify-center items-center" : "hidden"
          } `}
        >
          <div className="mt-16">
            <img src="./images/logo01.png" alt="" className="w-10 h-12" />
          </div>
        </li>
      </ul>
    </>
  )
}

export default NavbarItems
