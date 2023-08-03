type ButtonCTAProps = {
  children: React.ReactNode;
}

const ButtonCTA = ({ children }: ButtonCTAProps) => {
  return(
    <button className="bg-brandRed-500 max-w-xl w-11/12 rounded-md text-center text-white p-4">
      {children}
    </button>
  )
}

export default ButtonCTA