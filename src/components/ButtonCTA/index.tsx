type ButtonCTAProps = {
  children: React.ReactNode;
}

const ButtonCTA = ({ children }: ButtonCTAProps) => {
  return(
    <button className="btn-shadow bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite cursor-pointer py-3 font-bold">
      {children}
    </button>
  )
}

export default ButtonCTA