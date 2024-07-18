import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { ReactNode } from 'react'

interface HeaderProps {
  topTitle: string
  children: ReactNode
  ctaText: string
  ctaHref: string
  description: string
  imageHeaderPath: string
}

const Header = ({
  topTitle,
  ctaText,
  ctaHref,
  description,
  children,
  imageHeaderPath,
}: HeaderProps) => {
  return (
    <header className="relative min-h-screen sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:gap-12">
      <Navbar />
      <div className="w-full absolute md:top-24 lg:top-12 left-0 hidden sm:block -z-10">
        <Image
          src="/images/inicioPc.png"
          alt="Imagem de fundo"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="">
        <Image
          src={`/images/${imageHeaderPath}.png`}
          className="block sm:hidden w-full"
          alt="Imagem do João Navarro"
          quality={100}
          width={375}
          height={740}
        />
        <Image
          src={`/images/${imageHeaderPath}Pc2.png`}
          className="hidden sm:block"
          alt="Imagem do João Navarro"
          width={450}
          height={535}
          quality={100}
        />
      </div>
      <div className="absolute top-16 flex flex-col justify-center items-center w-full sm:opacity-0">
        <h3 className="p-1 text-center uppercase tracking-[6px] text-xs text-brandWhite">
          {topTitle}
        </h3>
        <div className="w-3/4 line-gradient h-[1px]"></div>
        <h1 className="uppercase text-brandWhite text-4xl md:text-5xl tracking-wider font-semibold mt-2">
          João Navarro
        </h1>
      </div>
      <div className="flex flex-col gap-3 justify-start items-start px-2 -mt-[120px] sm:mt-0 sm:max-w-[600px]">
        {children}
        <p className="text-zinc-300 text-justify">{description}</p>
        <a
          href={ctaHref}
          className="btn-shadow bg-brandRed-500 w-full sm:w-64 rounded-md text-center uppercase text-brandWhite py-3 font-bold"
        >
          {ctaText}
        </a>
      </div>
    </header>
  )
}

export default Header
