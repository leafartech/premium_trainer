type QuoteProps = {
  Citation: string;
}

const Quote = ({ Citation }: QuoteProps) => {
  return (
    <div className="w-full flex flex-col justify-center max-w-2xl">
      <div className="flex justify-between relative">
        <span className="text-5xl text-brandWhite">"</span>
        <span className="text-brandWhite text-justify italic mt-2">{Citation}</span>
        <span className="absolute text-5xl text-brandWhite right-0 -bottom-6">"</span>
      </div>
      <div className="flex opacity-80 w-full items-center justify-end px-2">
        <div className="w-8 h-[2px] bg-brandWhite"></div>
        <span className="text-brandWhite text-sm">João Navarro</span>
      </div>
    </div>
  )
}

export default Quote