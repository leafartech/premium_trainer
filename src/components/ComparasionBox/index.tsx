import { FaX } from "react-icons/fa6"

const ComparisionBox = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 relative">
      <div className="flex flex-col bg-brandWhite rounded-md overflow-hidden pb-4 space-y-4">
        <h3 className="w-full bg-red-600 p-3 text-xl text-brandWhite">
          <span className="font-bold">Quem não pode</span> se
          beneficiar com meu trabalho
        </h3>
        <div className="flex flex-col gap-3 py-6">
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/xIcon3.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/xIcon3.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/xIcon3.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
        </div>
      </div>
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-red-600 border text-brandWhite absolute translate-y-4">
        <FaX size={32} />
      </div>
      <div className="flex flex-col bg-brandWhite rounded-md overflow-hidden">
        <h3 className="w-full bg-green-500 p-3 text-xl text-brandWhite">
          <span className="font-bold">Quem pode</span> se
          beneficiar com meu trabalho
        </h3>
        <div className="flex flex-col gap-3 py-6">
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/checkIcon2.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/checkIcon2.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img src="./images/checkIcon2.png" alt="Check icon" className="h-5 w-5" />
            <p>nxfnfadjbfadgbaibgiadbgbadbg</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisionBox
