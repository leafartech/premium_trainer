type ButtonCTAProps = {
  children: React.ReactNode
  href: string
}

const ButtonCTA = ({ children, href }: ButtonCTAProps) => {
  return (
    <a
      href={href}
      className="btn-shadow block bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold"
    >
      {children}
    </a>
  )
}

export default ButtonCTA
