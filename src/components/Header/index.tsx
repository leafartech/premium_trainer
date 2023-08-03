import ButtonCTA from "components/ButtonCTA";
import Navbar from "components/Navbar"
import Link from "next/link";

type HeaderProps = {
  subtitle?: string;
}

const Header = ({ subtitle }: HeaderProps) => {
  return (
    <header className="space-y-2 flex w-full flex-col">
      <Navbar />
      <div className="flex flex-col w-full justify-center items-center space-y-2 lg:hidden">
        <h3 className="border-b border-b-brandRed-400/20 p-1 w-2/4 text-center uppercase tracking-[1.15em] text-xs text-brandWhite">{subtitle ? subtitle : "Treinador"}</h3>
        <h1 className="uppercase text-brandWhite text-4xl tracking-wider">João Navarro</h1>
      </div>
      <div className="text-white lg:absolute text-5xl lg:left-3/4 lg:top-36">
          IMAGEM
      </div>
      <div className="flex lg:max-w-2xl flex-col justify-center items-center space-y-2 p-2 lg:justify-start lg:mt-4">
        <h2 className="text-2xl text-brandWhite">Lorem ipsum dolor sit <span className="text-brandRed-500">amet consectetur adipisicing elit.</span></h2>
        <p className="text-brandWhite text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quaerat consectetur fugiat, nihil dolores corporis. Inventore reiciendis perspiciatis iusto voluptatibus nesciunt ipsam, tenetur illum saepe id, molestias tempore doloremque!</p>
        <ButtonCTA>
          <Link href="">AAA</Link>
        </ButtonCTA>
      </div>
    </header>
  )
}

export default Header