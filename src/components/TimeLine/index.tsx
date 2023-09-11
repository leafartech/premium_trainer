interface TimeLineProps {
  txt1: { title: string, description: string }
  txt2: { title: string, description: string }
  txt3: { title: string, description: string }
  txt4?: { title: string, description: string }
}

const TimeLine = ({ txt1, txt2, txt3, txt4 }: TimeLineProps) => {
  return (
    <div className="w-full flex justify-start px-2 mt-4">
      <div className={`bg-brandRed-500 w-3 sm:w-1 relative ${!txt4 ? 'h-[340px] md:h-[330px]' : 'h-[450px] md:h-[450px]'}`}>

        <svg className="h-6 w-6 text-brandRed-500 absolute -bottom-4 left-[-13px] md:left-[-10px]" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8926 22.2332C12.5227 22.9653 11.4773 22.9653 11.1074 22.2332L0.608616 1.45091C0.272603 0.785773 0.755996 0 1.50119 0L22.4988 0C23.244 0 23.7274 0.785775 23.3914 1.45091L12.8926 22.2332Z" fill="#D30D0C" />
        </svg>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative flex items-center text-brandWhite text-xl md:text-2xl ms-1">
              <img
                src="./images/locIcon.png"
                alt="ìcone da linha do tempo"
                className=" absolute -left-5 h-5 w-4"
              />
              <span>1- {txt1.title}</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 md:text-base text-sm text-justify sm:w-[500px]">
            {txt1.description}
          </p>
        </div>
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative md:text-2xl flex items-center text-brandWhite text-xl ms-1">
              <img
                src="./images/locIcon.png"
                alt="ìcone da linha do tempo"
                className=" absolute -left-5 h-5 w-4"
              />
              <span>2- {txt2.title}</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 md:text-base text-sm text-justify sm:w-[500px]">
            {txt2.description}
          </p>
        </div>
        <div>
          <div className="relative ps-8 w-full flex justify-start">
            <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
            <h3 className="relative md:text-2xl flex items-center text-brandWhite text-xl ms-1">
              <img
                src="./images/locIcon.png"
                alt="ìcone da linha do tempo"
                className=" absolute -left-5 h-5 w-4"
              />
              <span>3 - {txt3.title}</span>
            </h3>
          </div>
          <p className="text-zinc-300 ms-11 md:text-base text-sm text-justify sm:w-[500px]">
            {txt3.description}
          </p>
        </div>
        {txt4 && (
          <div>
            <div className="relative ps-8 w-full flex justify-start">
              <div className="absolute left-0 bottom-1 w-6 h-6 border-l-[3px] border-dashed border-l-brandRed-500 -rotate-90"></div>
              <h3 className="relative md:text-2xl flex items-center text-brandWhite text-xl ms-1">
                <img
                  src="./images/locIcon.png"
                  alt="ìcone da linha do tempo"
                  className=" absolute -left-5 h-5 w-4"
                />
                <span>4- {txt4.title}</span>
              </h3>
            </div>
            <p className="text-zinc-300 ms-11 md:text-base text-sm text-justify sm:w-[500px]">
              {txt4.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TimeLine
