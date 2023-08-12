import Link from "next/link"

interface ServicesBoxProps {
  href: string
  product: string
  bottomSentence: string
}

const ServicesBox = ({ bottomSentence, href, product }: ServicesBoxProps) => {
  return (
    <div className="product_gradient w-full sm:max-w-md flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl">
      <img src="./images/logo01.png" alt="Logo" className="w-10 h-12" />
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h4 className="text-[24px] font-bold text-white text-center">{product}</h4>
        <Link href={href} className="w-full text-brandRed-500 bg-white py-3 text-lg text-center font-semibold rounded-xl">Saber mais</Link>
        <p className="relative flex items-center text-sm uppercase tracking-[.1em] text-zinc-100 after:absolute after:w-8 after:h-[2px] after:-right-12 after:bg-zinc-100 after:rounded-full before:absolute before:w-8 before:h-[2px] before:-left-12 before:bg-zinc-100 before:rounded-full">{bottomSentence}</p>
      </div>
    </div>
  )
}

export default ServicesBox
