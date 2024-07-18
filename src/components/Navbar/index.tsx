"use client"

import Logo from "@/components/Logo"
import useScroll from "@/hooks/useScroll"
import NavbarItems from "./NavbarItems"

const Navbar = () => {
  const { backgroundColor } = useScroll()

  return (
    <nav
      data-background-color={backgroundColor}
      className={`fixed top-0 left-0 w-full h-16 flex items-center transition duration-500 justify-start z-10 ${backgroundColor === "bg-brandRed-500/80" && "bg-brandRed-500/80"}`}
    >
      <div className="px-2">
        <Logo />
      </div>
      <NavbarItems />
    </nav>
  )
}

export default Navbar
