interface LogoProps {
  third?: boolean
}

const Logo = ({ third }: LogoProps) => {
  return (
    <img src={`${!third ? '../images/logo01.png' : '../../images/logo01.png'}`} alt="Logo do João" className="h-7 w-7" />
  )
}

export default Logo
