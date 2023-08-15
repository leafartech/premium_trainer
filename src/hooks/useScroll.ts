import { useEffect, useState } from "react"

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const threshold = 400
  const backgroundColor =
    scrollPosition >= threshold ? "bg-brandRed-500/50" : "transparent"

  return {
    backgroundColor
  }
}

export default useScroll
