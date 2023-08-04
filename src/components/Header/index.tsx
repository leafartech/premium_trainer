import ButtonCTA from "components/ButtonCTA";
import Navbar from "components/Navbar"
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type HeaderProps = {
  topTitle: string;
  children: ReactNode
  ctaText: string
  ctaHref: string
  description: string
  imagePath: string
}

const Header = ({ topTitle, ctaText, ctaHref, description, children, imagePath }: HeaderProps) => {
  return (
    <header className="space-y-2 flex w-full min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col w- w-full justify-center items-center space-y-2 lg:hidden">
        <h3 className="border-b border-b-brandRed-400/20 p-1 w-2/4 text-center uppercase tracking-[1.15em] text-xs text-brandWhite">{topTitle}</h3>
        <h1 className="uppercase text-brandWhite text-4xl tracking-wider">João Navarro</h1>
      </div>
      <div className="absolute top-0 left-0 w-full -z-10 min-h-screen flex items-end justify-center md:items-center md:justify-center">
        <div className="max-w-my min-h-screen flex flex-col justify-end md:justify-center md:items-center md:flex-row-reverse">
          <div className="text-white lg:w-myLg xl:w-myXl mdabsolute md:top-0 md:left-0 md:relative text-5xl">
            <img className="w-full -z-10" src={`images/bg${imagePath}.png`} alt="Foto João Navarro" />
          </div>
          <div className="flex w-full lg:w-myLg xl:w-myXl flex-col justify-center items-start space-y-4 p-2 z-10">
            <h2 className="text-3xl md:text-5xl text-brandWhite font-bold">{children}</h2>
            <p className="text-zinc-300 text-base text-justify">{description}</p>
            <div className="w-full md:max-w-xs">
              <ButtonCTA>
                <Link href={ctaHref}>{ctaText}</Link>
              </ButtonCTA>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header