import { FaSquareCheck } from "react-icons/fa6"

type SecondCardProps = {
  title: string;
}

const SecondCard = ({ title }: SecondCardProps) => {
  return (
    <div className="p-3 space-y-2 w-full flex flex-col justify-center items-start">
      <div className="w-full flex space-x-2 items-center ">
          <FaSquareCheck  size={26} className="text-brandRed-500 " />
        <h3 className="text-lg text-brandWhite text-left">{title}</h3>
      </div>
    </div>
  )
}

export default SecondCard