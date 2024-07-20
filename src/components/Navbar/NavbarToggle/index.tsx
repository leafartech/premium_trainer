import { useNavbar } from '@/hooks/useNavbar'

const NavbarToggle = () => {
  const { navbarToggle, toggleNavbar } = useNavbar()

  return (
    <div
      className="cursor-pointer md:hidden absolute right-3 h-4 w-6 flex justify-between items-center flex-col z-10"
      onClick={toggleNavbar}
    >
      <div
        className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
          navbarToggle &&
          'absolute rotate-[-45deg] top-[50%] translate-y-[-50%]'
        } `}
      ></div>
      <div
        className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
          navbarToggle && 'opacity-0'
        }`}
      ></div>
      <div
        className={`bg-brandWhite w-full rounded transition h-[1.5px] ${
          navbarToggle &&
          'absolute rotate-[45deg] bottom-[50%] translate-y-[50%]'
        }`}
      ></div>
    </div>
  )
}

export default NavbarToggle
