import { FaCaretDown } from "react-icons/fa6"

const TimeLine = () => {
  return (
    <div className="w-full flex justify-start p-4">
      <div className="h-[500px] bg-brandRed-500 w-1 relative"><FaCaretDown size={32} className="text-brandRed-500 absolute -bottom-4 left-[-14px]" /></div>
      <div className="flex flex-col items-center">
        <div className="m-4 w-full flex justify-start">
          <div className="w-4 h-4 border-l-2 border-dashed border-l-brandRed-500 -rotate-90"></div>
          <h3 className="text-brandWhite text-xl">1-Agendamento Simplificado</h3>
        </div>
        <p className="text-brandWhite ml-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis, asperiores accusantium repellendus maxime illum consectetur quaerat quidem quo qui repudiandae est provident dolores, cupiditate nemo modi expedita ex eaque?</p>
      </div>
    </div>
  )
}

export default TimeLine