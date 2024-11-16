import Navbar from '@/components/Navbar'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface HeaderProps {
  topTitle: string
  children: ReactNode
  ctaText: string
  ctaHref: string
  description: string
  imageHeaderPath: string
  background?: string
}

const Header = ({
  topTitle,
  ctaText,
  ctaHref,
  description,
  children,
  imageHeaderPath,
  background = 'inicio-pc',
}: HeaderProps) => {
  return (
    <header className="relative min-h-screen sm:flex sm:flex-row sm:gap-12 sm:items-center sm:justify-center sm:px-40">
      <Navbar />
      <div className="w-full absolute left-0 hidden sm:block -z-10">
        <Image
          src={`/images/${background}.png`}
          alt="Imagem de fundo"
          quality={100}
          width={1920}
          height={1200}
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
      </div>
      <div className="bg-brandBlack/80 rounded-md px-4 flex flex-col gap-4 sm:flex-row sm:gap-12 sm:px-20 sm:py-20 sm:rounded-md sm:shadow-2xl">
        <Image
          src="/images/logo01.png"
          alt="Imagem do João Navarro"
          quality={100}
          width={200}
          height={200}
          className="hidden sm:block"
        />
        <div className="absolute top-16 flex flex-col justify-center items-center w-full sm:opacity-0">
          <h3 className="p-1 text-center uppercase tracking-[6px] text-xs text-brandWhite">
            {topTitle}
          </h3>
          <div className="w-3/4 line-gradient h-[1px]" />
          <h1 className="uppercase text-brandWhite text-4xl md:text-5xl tracking-wider font-semibold mt-2">
            João Navarro
          </h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start px-2 -mt-[120px] sm:mt-0 sm:max-w-[600px]">
          {children}
          <p className="text-zinc-300 text-justify">{description}</p>
          <a
            href={ctaHref}
            className="btn-shadow bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
