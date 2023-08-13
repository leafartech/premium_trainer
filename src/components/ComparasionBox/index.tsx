import { XMarkIcon } from "@heroicons/react/24/outline"

const ComparisionBox = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:flex-row relative">
      <div className="flex flex-col max-h-96 bg-brandWhite rounded-md overflow-hidden">
        <h3 className="w-full bg-red-600 p-3 text-xl text-brandWhite">
          <span className="font-bold">Quem não pode</span> se beneficiar com meu
          trabalho.
        </h3>
        <div className="flex flex-col gap-3 py-6">
          <div className="flex justify-start items-center gap-2 py-1 px-4">
            <img
              src="./images/xIcon3.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem é preguiçoso.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/xIcon3.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem não quer mudar de vida.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/xIcon3.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem quer ficar na zona de conforto.</p>
          </div>
        </div>
      </div>
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-red-600 border text-brandWhite absolute md:translate-x-5">
        <XMarkIcon className="w-10 h-10" />
      </div>
      <div className="flex flex-col max-h-96 bg-brandWhite rounded-md overflow-hidden">
        <h3 className="w-full bg-green-500 p-3 text-xl text-brandWhite">
          <span className="font-bold">Quem pode</span> se beneficiar com meu
          trabalho.
        </h3>
        <div className="flex flex-col gap-3 py-6">
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Tem força de vontade.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quer mudar de vida.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quer melhorar a saúde.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisionBox
