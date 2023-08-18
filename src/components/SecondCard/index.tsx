import { FaSquareCheck } from "react-icons/fa6"

type SecondCardProps = {
  title: string
}

const SecondCard = ({ title }: SecondCardProps) => {
  return (
    <div className="py-2 space-y-2 w-full flex flex-col justify-center items-start">
      <div className="w-full flex space-x-2 items-center ">
        <img
          src="./images/checkIcon.png"
          alt="Check icon"
          className="w-6 h-6"
        />
        <p className="text-md md:text-xl text-zinc-300 text-left">{title}</p>
      </div>
    </div>
  )
}

export default SecondCard
