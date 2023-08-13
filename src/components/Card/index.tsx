import { ElementType } from "react"

type CardProps = {
  Icon: ElementType
  title: string
  description: string
}

const Card = ({ Icon, title, description }: CardProps) => {
  return (
    <div
      className="flex flex-col 
      items-start md:items-center md:justify-center text-brandRed-500"
    >
      <div className="flex md:flex-col md:justify-center items-center gap-1 md:gap-0">
        <Icon className="h-9 w-9" />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-zinc-300 text-md ms-10 md:ms-0">{description}</p>
    </div>
  )
}

export default Card
