import Link from "next/link"
import { useState } from "react"
import { MenuBurger, X } from "react-flaticons"
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="w-full flex justify-between items-center p-5">
      <h1 className="text-5xl text-white">Logo</h1>
      {/* Atualizar depois para foto LOGO! */}
      <div className="flex flex-col">
        <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <X size={24} className="text-brandWhite" />
          ) : (
            <MenuBurger size={24} className="text-brandWhite" />
          )}
        </button>
        {openNav && (
          <nav className="flex flex-col w-full h-full justify-center items-center">
            <Link href="/" className="text-brandWhite">Consultoria Presencial</Link>
            <Link href="/" className="text-brandWhite">Consultoria Online</Link>
            <Link href="/" className="text-brandWhite">Avaliação Física</Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Navbar
