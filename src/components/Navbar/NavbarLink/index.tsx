'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarLinkProps {
  href: string
  children: React.ReactNode
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'text-white font-bold' : 'text-white/60'
      } trasition font-medium hover:text-white flex gap-2 items-center `}
    >
      {children}
    </Link>
  )
}

export default NavbarLink
