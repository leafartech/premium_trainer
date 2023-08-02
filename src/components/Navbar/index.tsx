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
    <nav className="fixed top-0 left-0 w-full bg-blue-700 h-12 md:h-16 flex items-center">
        <div className="">

        </div>
        <div id="navbar_menu" className="cursor-pointer absolute right-3 h-4 w-7 flex justify-between items-end flex-col z-10" onClick={e => Toggle()}>
          <div className={`bg-white w-full rounded transition`} style={{ height: '2px'}}></div>
          <div className={`bg-white w-full rounded transition ${navbarToggle && 'opacity-0'}`} style={{ height: '2px'}}></div>
          <div className={`bg-white w-full rounded transition`} style={{ height: '2px'}}></div>
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