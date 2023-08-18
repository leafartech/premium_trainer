import Logo from "components/Logo"

const Footer = () => {
  return (
    <footer className="mt-4 w-full flex flex-col justify-center items-center gap-3 p-3">
      <div>
        <Logo />
      </div>
      {/* Subistiuir pela LOGO */}
      <h3 className="text-sm text-zinc-500 text-center">
        Todos os direitos reservados &copy; João Navarro.
      </h3>
    </footer>
  )
}

export default Footer
