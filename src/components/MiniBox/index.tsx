import { Gym } from "react-flaticons"

type MiniBoxProps = {
  text: string;
}

const MiniBox = ({ text }: MiniBoxProps) => {
  return(
      <div className="p-1 space-x-1 opacity-60 w-1/5 min-w-[120px] max-w-[160px] flex rounded  justify-center items-center bg-brandRed-500">
        <Gym className="text-brandWhite font-bold" />
        <span className="text-xs uppercase font-bold text-brandWhite tracking-widest"> {text}</span>
      </div>
  )
}

export default MiniBox