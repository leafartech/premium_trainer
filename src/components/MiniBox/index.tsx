import { FaDumbbell } from "react-icons/fa6"
type MiniBoxProps = {
  text: string;
}

const MiniBox = ({ text }: MiniBoxProps) => {
  return(
      <div className="p-1 space-x-1 w-1/5 min-w-[120px] max-w-[160px] flex rounded  justify-center items-center bg-brandRed-500/50 ">
        <FaDumbbell className="text-white" />
        <span className="text-xs uppercase font-bold text-white tracking-widest"> {text}</span>
      </div>
  )
}

export default MiniBox