'use client'

import { useState } from 'react'

const useNavbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false)

  function toggleNavbar() {
    setNavbarToggle(!navbarToggle)
  }

  return {
    navbarToggle,
    toggleNavbar,
  }
}

export { useNavbar }
