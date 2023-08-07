import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

const ServicesBox = () => {
  return (
    <div className="w-full flex flex-col space-y-6 items-center mt-8 justify-center">
      <div className="border-gradient-50 rounded-md flex justify-between w-11/12 p-4 overflow-hidden">
        <Link href="/consultoria-presencial" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Consultoria Presencial</h3>
          <FaArrowRight size={24} />
        </Link>
      </div>
      <div className="border-gradient-70 rounded-md flex justify-between w-11/12 p-4 overflow-hidden">
        <Link href="/consultoria-online" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Consultoria Online</h3>
          <FaArrowRight size={24} />
        </Link>
      </div>
      <div className="border-gradient-100 rounded-md flex justify-between w-11/12 p-4 overflow-hidden">
        <Link href="/avaliacao-fisica" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Avaliação Física</h3>
          <FaArrowRight size={24} />
        </Link>
      </div>
    </div>
  )
}

export default ServicesBox