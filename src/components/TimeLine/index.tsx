import { FaCaretDown } from "react-icons/fa6"

const TimeLine = () => {
  return (
    <div className="w-full flex justify-start p-4">
      <div className="h-[650px] bg-brandRed-500 w-1 relative">
        <FaCaretDown
          size={32}
          className="text-brandRed-500 absolute -bottom-4 left-[-14px]"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="mx-4 w-full flex justify-start">
          <div className="w-4 h-4 border-l-2 border-dashed border-l-brandRed-500 -rotate-90"></div>
          <h3 className="text-brandWhite text-xl ms-1">
            1-Agendamento Simplificado
          </h3>
        </div>
        <p className="text-brandWhite ms-11 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, nobis, asperiores accusantium repellendus maxime
          illum consectetur quaerat quidem quo qui repudiandae est
          provident dolores, cupiditate nemo modi expedita ex eaque?
        </p>

        <div className="mx-4 mt-3 w-full flex justify-start">
          <div className="w-4 h-4 border-l-2 border-dashed border-l-brandRed-500 -rotate-90"></div>
          <h3 className="text-brandWhite text-xl ms-1">
            2-Análise dos objetivos
          </h3>
        </div>
        <p className="text-brandWhite ms-11 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, nobis, asperiores accusantium repellendus maxime
          illum consectetur quaerat quidem quo qui repudiandae est
          provident dolores, cupiditate nemo modi expedita ex eaque?
        </p>

        <div className="mx-4 mt-3 w-full flex justify-start">
          <div className="w-4 h-4 border-l-2 border-dashed border-l-brandRed-500 -rotate-90"></div>
          <h3 className="text-brandWhite text-xl ms-1">
            3-Acompanhmento dos resultados
          </h3>
        </div>
        <p className="text-brandWhite ms-11 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, nobis, asperiores accusantium repellendus maxime
          illum consectetur quaerat quidem quo qui repudiandae est
          provident dolores, cupiditate nemo modi expedita ex eaque?
        </p>

        <div className="mx-4 mt-3 w-full flex justify-start">
          <div className="w-4 h-4 border-l-2 border-dashed border-l-brandRed-500 -rotate-90"></div>
          <h3 className="text-brandWhite text-xl ms-1">
            4-Finalização
          </h3>
        </div>
        <p className="text-brandWhite ms-11 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, nobis, asperiores accusantium repellendus maxime
          illum consectetur quaerat quidem quo qui repudiandae est
          provident dolores, cupiditate nemo modi expedita ex eaque?
        </p>
      </div>
    </div>
  )
}

export default TimeLine
