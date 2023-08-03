import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [ navbarToggle, setNavbarToggle] = useState(false)

  function Toggle() {
    setNavbarToggle(!navbarToggle)

    const hamburguer = document.querySelector('#navbar_menu')
    hamburguer?.classList.add('hamb_actived')
  }

  return ( 
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between">
        <div className="p-1">
          Logo
        </div>
        <div id="navbar_menu" className="cursor-pointer md:hidden absolute right-3 h-4 w-7 flex justify-between items-center flex-col z-10" onClick={() => Toggle()}>
          <div className={`bg-white w-full rounded transition h-[2px] ${navbarToggle && "absolute rotate-[45deg] top-2/4 translate-y-[-50%]"} `}></div>
          <div className={`bg-white w-full rounded transition h-[2px] ${navbarToggle && 'opacity-0'}`}></div>
          <div className={`bg-white w-full rounded transition h-[2px] ${navbarToggle && "absolute rotate-[-45deg] bottom-2/4 translate-y-[50%]"}`}></div>
        </div>
        <ul className={`absolute top-0 transition w-full bg-black min-h-screen flex flex-col md:flex-row ${!navbarToggle ? 'translate-x-full' : 'translate-x-0'}`}>
          <li>
            <Link href="" className="text-white">Avaliação física</Link>
          </li>
          <li>
            <Link href="" className="text-white">Consultoria Presencial</Link>
          </li>
          <li>
            <Link href="" className="text-white">Consultoria Online</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar