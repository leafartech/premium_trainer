import Footer from "components/Footer"
import Link from "next/link"
import { FaTriangleExclamation} from "react-icons/fa6"

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-2 justify-between items-center w-screen h-screen">
      <div className="relative h-2/4 flex flex-col lg:flex-row lg:space-x-2 items-center justify-center">
        <h1 className="text-4xl text-brandWhite">Página não encontrada!</h1>
          <h2><FaTriangleExclamation size={40} className="text-brandRed-500 btn-shadow" /></h2>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 w-full text-brandWhite">
        <Link href="/" className="text-3xl text-brandWhite bg-brandRed-500 btn-shadow w-4/5 text-center max-w-2xl rounded-md px-2 py-1 hover:opacity-80">Clique aqui para voltar</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound