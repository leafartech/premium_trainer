import { FaX, FaCheck } from "react-icons/fa6"

const ComparisionBox = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-col bg-brandWhite rounded-md overflow-hidden space-y-4 w-11/12 pb-4">
        <h3 className="w-full bg-green-500 p-3 text-xl text-brandWhite">
          <span className="font-bold uppercase">Quem pode</span> se
          beneficiar com meu trabalho
        </h3>
        <div className="flex justify-start items-center">
          <FaCheck size={32} color="#22c55e" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
        <div className="flex justify-start items-center">
          <FaCheck size={32} color="#22c55e" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
        <div className="flex justify-start items-center">
          <FaCheck size={32} color="#22c55e" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
      </div>
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-red-600 border text-brandWhite absolute top-56">
        <FaX size={32} />
      </div>
      <div className="flex flex-col bg-brandWhite rounded-md overflow-hidden w-11/12 pb-4 space-y-4 mt-8">
        <h3 className="w-full bg-red-600 p-3 text-xl text-brandWhite">
          <span className="font-bold uppercase">Quem não pode</span> se
          beneficiar com meu trabalho
        </h3>
        <div className="flex justify-start items-center">
          <FaX size={32} color="#dc2626" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
        <div className="flex justify-start items-center">
          <FaX size={32} color="#dc2626" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
        <div className="flex justify-start items-center">
          <FaX size={32} color="#dc2626" />
          <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
        </div>
      </div>
    </div>
  )
}

export default ComparisionBox
