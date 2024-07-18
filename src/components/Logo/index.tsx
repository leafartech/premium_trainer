import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/images/logo01.png"
      alt="Logo do João Navarro"
      width={28}
      height={28}
    />
  )
}

export default Logo
