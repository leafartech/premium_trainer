import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const ServicesBox = () => {
  return (
    <div className="flex mt-2 flex-col space-y-4 items-center justify-center w-full">
      <Link
        href="/consultoria-presencial"
        className="border-gradient-50 w-full md:w-[800px] p-4 flex justify-between text-brandWhite"
      >
        <h3 className="text-lg md:text-xl font-bold">Consultoria Presencial</h3>
        <ArrowLongRightIcon className="w-7 h-7 md:hidden" />
      </Link>
      <Link
        href="/consultoria-online"
        className="border-gradient-70 w-full flex justify-between p-4 text-brandWhite"
      >
        <h3 className="text-lg md:text-xl font-bold">Consultoria Online</h3>
        <ArrowLongRightIcon className="w-7 h-7 md:hidden" />
      </Link>
      <Link
        href="/avaliacao-fisica"
        className="border-gradient-100 flex justify-between w-full p-4 text-brandWhite"
      >
        <h3 className="text-lg md:text-xl font-bold">Avaliação Física</h3>
        <ArrowLongRightIcon className="w-7 h-7 md:hidden" />
      </Link>
    </div>
  )
}

export default ServicesBox
