import Image from 'next/image'
import Link from 'next/link'

interface ServicesBoxProps {
  href: string
  product: string
  bottomSentence: string
}

const ServicesBox = ({ bottomSentence, href, product }: ServicesBoxProps) => {
  return (
    <div className="product_gradient w-full sm:max-w-md h-80 flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl">
      <Image
        src="/images/logo01.png"
        alt="Logo"
        width={40}
        height={48}
        quality={100}
      />
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h4 className="text-[24px] font-bold text-brandWhite text-center">
          {product}
        </h4>
        <Link
          href={href}
          className="w-full text-brandRed-500 bg-brandWhite py-3 text-lg text-center font-semibold rounded-xl"
        >
          Saber mais
        </Link>
        <p className="relative flex items-center text-sm uppercase tracking-[.1em] text-zinc-100 after:absolute after:w-8 after:h-[2px] after:-right-12 after:bg-zinc-100 after:rounded-full before:absolute before:w-8 before:h-[2px] before:-left-12 before:bg-zinc-100 before:rounded-full">
          {bottomSentence}
        </p>
      </div>
    </div>
  )
}

export default ServicesBox
