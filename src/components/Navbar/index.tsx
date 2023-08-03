import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false)

  function Toggle() {
    setNavbarToggle(!navbarToggle)
  }

  return (
    <nav className="top-0 left-0 w-full h-16 flex items-center justify-between">
      <div className="text-white text-xl p-4">Logo</div>
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
        className={`transition space-y-4 w-full top-0 p-4 bg-black absolute min-h-screen md:bg-transparent md:transform-none
         md:p-3 md:w-[600px] md:flex md:h-full md:relative md:space-y-0 md:justify-around md:right-4 md:items-center ${!navbarToggle ? "translate-x-full" : "translate-x-0"} `}
      >
        <li>
          <Link href="" className="text-brandRed-500 trasition hover:underline">
            Início
          </Link>
        </li>
        <li>
          <Link href="" className="text-brandWhite trasition hover:text-brandRed-500 hover:underline">
            Avaliação física
          </Link>
        </li>
        <li>
          <Link href="" className="text-brandWhite trasition hover:text-brandRed-500 hover:underline">
            Consultoria Presencial
          </Link>
        </li>
        <li>
          <Link href="" className="text-brandWhite trasition hover:text-brandRed-500 hover:underline">
            Consultoria Online
          </Link>
        </li>
        <li className={`w-full md:hidden text-white ${navbarToggle ? "flex justify-center items-center" : "hidden"} `}>
          Logo
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
