import { FaCaretDown } from "react-icons/fa6"

const TimeLine = () => {
  return (
    <div className="w-full flex justify-start px-2 mt-4">
      <div className="h-[450px] bg-brandRed-500 rounded-t w-3 relative">
        <FaCaretDown
          size={32}
          className="text-brandRed-500 absolute -bottom-4 left-[-13px]"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative flex items-center text-brandWhite text-xl ms-1">
              <img src="./images/locIcon.png" alt="ìcone da linha do tempo" className=" absolute -left-5 h-5 w-4" />
              <span>1- Agendamento Simplificado</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, nobis, asperiores accusantium repellendus maxime
          </p>
        </div>
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative flex items-center text-brandWhite text-xl ms-1">
              <img src="./images/locIcon.png" alt="ìcone da linha do tempo" className=" absolute -left-5 h-5 w-4" />
              <span>2- Agendamento Simplificado</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, nobis, asperiores accusantium repellendus maxime
          </p>
        </div>
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative flex items-center text-brandWhite text-xl ms-1">
              <img src="./images/locIcon.png" alt="ìcone da linha do tempo" className=" absolute -left-5 h-5 w-4" />
              <span>3- Agendamento Simplificado</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, nobis, asperiores accusantium repellendus maxime
          </p>
        </div>
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative flex items-center text-brandWhite text-xl ms-1">
              <img src="./images/locIcon.png" alt="ìcone da linha do tempo" className=" absolute -left-5 h-5 w-4" />
              <span>4- Agendamento Simplificado</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, nobis, asperiores accusantium repellendus maxime
          </p>
        </div>
      </div>

    </div>
  )
}

export default TimeLine
