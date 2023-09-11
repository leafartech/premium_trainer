import QuoteLeft from "./QuoteLeft"
import QuoteRight from "./QuoteRight"

type QuoteProps = {
  Citation: string
  firstWord: string
}

const Quote = ({ Citation, firstWord }: QuoteProps) => {
  return (
    <div className="w-full flex flex-col justify-center max-w-2xl">
      <div className="flex relative my-3">
        <div className="absolute top-0 left-0">
          <QuoteLeft />
        </div>
        <div>
          <p className="text-zinc-300 md:text-xl text-justify italic">
            <span className="ms-8">{firstWord} </span>
            {Citation}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 xl:-bottom-3">
          <QuoteRight />
        </div>
      </div>
      <div className="relative flex w-full items-center justify-end px-2">
        <span className="text-brandWhite md:text-base text-sm flex items-center relative before:w-8 before:md:w-10 before:h-[2px] before:bg-white before:absolute before:rounded-lg before:-left-9 before:md:-left-11">
          João Navarro
        </span>
      </div>
    </div>
  )
}

export default Quote
