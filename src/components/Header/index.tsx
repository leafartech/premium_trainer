import ButtonCTA from "components/ButtonCTA"
import MiniBox from "components/MiniBox"
import Navbar from "components/Navbar"
import Link from "next/link"
import { ReactNode } from "react"

type HeaderProps = {
  topTitle: string;
  children: ReactNode;
  ctaText: string;
  ctaHref: string;
  description: string;
  imageHeaderPath: string;
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
    <header className="relative flex justify-end w-full min-h-screen sm:min-h-[950px] md:min-h-screen flex-col">
      <Navbar />
      <div className="absolute top-[72px] flex flex-col w-full justify-center items-center space-y-2 lg:hidden">
        <h3 className="p-1 text-center uppercase tracking-[1.15em] text-xs text-brandWhite">
          {topTitle}
        </h3>
        <div className="w-2/4 line-gradient h-[1px]"></div>
        <h1 className="uppercase text-brandWhite text-4xl tracking-wider">
          João Navarro
        </h1>
      </div>
      <div className="absolute top-0 left-0 block sm:hidden -z-10">
        <img
          className="w-full -z-10"
          src={`images/bg${imageHeaderPath}.png`}
          alt="Foto João Navarro"
        />
      </div>
      <div className="w-full  -z-10 sm:min-h-screen flex justify-center md:items-center md:justify-center">
        <div className="max-w-my relative sm:min-h-screen flex flex-col justify-start md:justify-center md:items-center md:flex-row-reverse">
          <div className="hidden sm:block left-0 lg:w-myLg xl:w-myXl md:top-0 md:left-0 md:relative">
            <img
              className="w-full -z-10"
              src={`images/bg${imageHeaderPath}.png`}
              alt="Foto João Navarro"
            />
          </div>
          <div className="flex w-full lg:w-myLg xl:w-myXl flex-col justify-center items-start space-y-4 p-2 z-10">
            <div className="w-full hidden lg:block">
              <MiniBox text="treinador" />
            </div>
            {children}
            <p className="text-zinc-300 text-base text-justify">
              {description}
            </p>
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
