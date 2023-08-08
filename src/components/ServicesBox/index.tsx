import Link from "next/link"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const ServicesBox = () => {
  return (
    <div className="w-full flex flex-col space-y-6 items-center justify-center">
      <div className="border-gradient-50 rounded-md flex justify-between w-full p-4 overflow-hidden">
        <Link href="/consultoria-presencial" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Consultoria Presencial</h3>
          <ArrowLongRightIcon className="w-7 h-7" />
        </Link>
      </div>
      <div className="border-gradient-70 rounded-md flex justify-between w-full p-4 overflow-hidden">
        <Link href="/consultoria-online" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Consultoria Online</h3>
          <ArrowLongRightIcon className="w-7 h-7" />
        </Link>
      </div>
      <div className="border-gradient-100 rounded-md flex justify-between w-full p-4 overflow-hidden">
        <Link href="/avaliacao-fisica" className="flex w-full justify-between text-brandWhite">
          <h3 className="text-lg font-bold">Avaliação Física</h3>
          <ArrowLongRightIcon className="w-7 h-7" />
        </Link>
      </div>
    </div>
  )
}

export default ServicesBox