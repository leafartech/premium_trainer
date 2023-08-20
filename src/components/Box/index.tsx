import { ElementType } from "react"

type BoxProps = {
  Icon: ElementType
  boxTitle: string
  boxDescription: string
}
const Box = ({ Icon, boxTitle, boxDescription }: BoxProps) => {
  return (
    <div
      id="box"
      className="flex max-w-lg flex-col px-4 py-8 sm:px-8 sm:py-12 border-gradient justify-center"
    >
      <div className="flex text-brandRed-500 justify-start space-x-2 items-center">
        <Icon className="w-8 h-8" />
        <h2 className="text-2xl font-medium">{boxTitle}</h2>
      </div>
      <p className="text-zinc-300 mt-3 text-justify">{boxDescription}</p>
    </div>
  )
}

export default Box
