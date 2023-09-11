import Logo from "components/Logo"
import useScroll from "hooks/useScroll"
import NavbarItems from "./NavbarItems"

const Navbar = () => {
  const { backgroundColor } = useScroll()

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 flex items-center transition duration-500 justify-start z-10 ${backgroundColor}`}
    >
      <div className="px-2">
        <Logo />
      </div>
      <NavbarItems />
    </nav>
  )
}

export default Navbar
