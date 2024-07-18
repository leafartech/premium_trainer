import { XMarkIcon } from '@heroicons/react/24/outline'

const ComparisionBox = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:flex-row relative">
      <div className="max-w-[482px] sm:h-[452px] flex flex-col bg-brandWhite rounded-md overflow-hidden">
        <h3 className="w-full bg-red-600 p-3 text-xl text-brandWhite sm:h-[80px]">
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
            <p className="text-xl">Pessoas sem compromisso.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/xIcon3.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem quer resultado imediato.</p>
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
      <div className="w-14 h-14 hidden sm:flex justify-center items-center -translate-y-16 rounded-full bg-brandWhite border-2 text-brandWhite absolute md:translate-x-3 md:translate-y-0">
        <XMarkIcon className="w-10 h-10 text-brandBlack" />
      </div>
      <div className="max-w-[482px] sm:h-[452px] flex flex-col bg-brandWhite rounded-md overflow-hidden">
        <h3 className="w-full bg-green-500 p-3 text-xl text-brandWhite sm:h-[80px]">
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
            <p className="text-xl">Pessoas com força de vontade.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem quer mais qualidade de vida.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quer busca ser mais produtivo.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem procura estratégia individualizada.</p>
          </div>
          <div className="flex justify-start items-center gap-2 py-3 px-4">
            <img
              src="./images/checkIcon2.png"
              alt="Check icon"
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className="text-xl">Quem está iniciando nos treinamentos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisionBox
