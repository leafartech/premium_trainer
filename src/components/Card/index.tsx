import { ElementType } from 'react'

interface CardProps {
  Icon: ElementType
  title: string
  description: string
}

const Card = ({ Icon, title, description }: CardProps) => {
  return (
    <div
      className="flex flex-col w-full
      items-start md:items-center text-brandRed-500"
    >
      <div className="w-full flex md:flex-col md:justify-center items-center gap-1 md:gap-0">
        <Icon className="h-9 w-9 md:w-11 md:h-11" />
        <h3 className="text-xl md:text-[22px] font-medium">{title}</h3>
      </div>
      <p className="text-zinc-300 md:text-lg ms-10 md:ms-0 sm:text-center">
        {description}
      </p>
    </div>
  )
}

export default Card
