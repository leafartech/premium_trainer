type ButtonCTAProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}

const ButtonCTA = ({ children, ...props }: ButtonCTAProps) => {
  return(
    <button {...props} className="btn-shadow bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold">
      {children}
    </button>
  )
}

export default ButtonCTA