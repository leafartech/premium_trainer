import ButtonCTA from "components/ButtonCTA"
import MiniBox from "components/MiniBox"
import Navbar from "components/Navbar"
import Link from "next/link"
import { ReactNode } from "react"

type HeaderProps = {
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
  imageHeaderPath
}: HeaderProps) => {
  return (
    // <header className="relative flex justify-end w-full min-h-screen sm:min-h-[950px] flex-col">
    //   <Navbar />
    //   <div className="absolute top-[72px] md:top-[120px] flex flex-col w-full justify-center items-center lg:hidden">
    //     <h3 className="p-1 text-center uppercase tracking-[1em] text-xs text-brandWhite">
    //       {topTitle}
    //     </h3>
    //     <div className="w-3/4 line-gradient h-[1px]"></div>
    //     <h1 className="uppercase text-brandWhite text-4xl md:text-5xl tracking-wider font-semibold mt-2">
    //       João Navarro
    //     </h1>
    //   </div>
    //   <div className="absolute top-0 left-0 block sm:hidden -z-10">
    //     <img
    //       className="w-full -z-10"
    //       src={`images/${imageHeaderPath}.png`}
    //       alt="Foto João Navarro"
    //     />
    //   </div>
    //   <div className="w-full -z-10 sm:min-h-screen flex justify-center md:items-center md:justify-center">
    //     <div className="max-w-my relative sm:min-h-screen flex flex-col justify-start md:justify-center md:items-center md:flex-row-reverse">
    //       <div className="hidden sm:block left-0 md:w-myXl lg:w-myLg xl:w-myXl md:top-0 md:left-0 md:relative">
    //         <img
    //           className="w-full -z-10"
    //           src={`images/${imageHeaderPath}.png`}
    //           alt="Foto João Navarro"
    //         />
    //       </div>
    //       <div className="flex w-full lg:w-myLg xl:w-myXl flex-col justify-center items-start space-y-4 p-2 z-10 pb-12">
    //         <div className="w-full hidden lg:block">
    //           <MiniBox text="treinador" />
    //         </div>
    //         <div className="-mb-[110px]">
    //           {children}
    //           <p className="text-zinc-300 text-base md:text-xl text-justify">
    //             {description}
    //           </p>
    //           <div className="w-full md:max-w-xs">
    //             <ButtonCTA>
    //               <Link href={ctaHref}>{ctaText}</Link>
    //             </ButtonCTA>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="relative min-h-screen sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:gap-12">
      <Navbar />
      <div className="w-full absolute top-24 left-0 hidden sm:block -z-10">
        <img src={`./images/${imageHeaderPath}Pc.png`} alt="Imagem de fundo" />
      </div>
      <div className="">
        <img src={`./images/${imageHeaderPath}.png`} className="block sm:hidden" alt="" />
        <img src={`./images/${imageHeaderPath}Pc2.png`} className="hidden sm:block" alt="" />
      </div>
      <div className="absolute top-16 flex flex-col justify-center items-center w-full sm:opacity-0">
        <h3 className="p-1 text-center uppercase tracking-[1em] text-xs text-brandWhite">
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
        <a href="#produtos" className="btn-shadow bg-brandRed-500 w-full sm:w-64 rounded-md text-center uppercase text-brandWhite py-3 font-bold">{ctaText}</a>
      </div>
    </header>
  )
}

export default Header
