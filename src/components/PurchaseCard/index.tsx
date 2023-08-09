import { CheckIcon } from "@heroicons/react/24/solid"
import ButtonCTA from "components/ButtonCTA"

type PurchaseCardProps = {
  titleCard: string
  descriptionCard: string
  valueOff: string
  valueOn: string
}

const PurchaseCard = ({
  titleCard,
  descriptionCard,
  valueOff,
  valueOn,
}: PurchaseCardProps) => {
  return (
    <div className="w-full purchase-card flex flex-col gap-3 justify-center px-4 py-8">
      <div className="flex flex-col w-full gap-1 mb-3">
        <h3 className="text-2xl text-brandWhite font-semibold">{titleCard}</h3>
        <h4 className="text-zinc-300 text-sm">{descriptionCard}</h4>
      </div>
      <div className="flex w-full justify-between items-center mb-3">
        <span className="text-zinc-300">
          de{" "}
          <s className="text-brandWhite font-bold">R${valueOff},99</s>{" "}
          por
        </span>
        <div className="flex flex-col">
          <span className="text-zinc-300">Pagamento único</span>
          <span className="text-4xl text-brandWhite font-extrabold">
            R${valueOn}
          </span>
        </div>
      </div>
      <div>
        <ButtonCTA>Quero agendar um horário</ButtonCTA>
      </div>
      <div className="flex flex-col gap-3 mt-3 w-full">
        <div className="flex items-center gap-3">
          <img src="./images/checkIcon3.png" alt="Ícone de check" className="h-5 w-5" />
          <p className="text-brandWhite">Agendamento simplificado.</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="./images/checkIcon3.png" alt="Ícone de check" className="h-5 w-5" />
          <p className="text-brandWhite">Estratégia exclusiva.</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="./images/checkIcon3.png" alt="Ícone de check" className="h-5 w-5" />
          <p className="text-brandWhite">
            Análise detalhada dos objetivos.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src="./images/checkIcon3.png" alt="Ícone de check" className="h-5 w-5" />
          <p className="text-brandWhite">
            Acompanhamento de resultados.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src="./images/checkIcon3.png" alt="Ícone de check" className="h-5 w-5" />
          <p className="text-brandWhite">
            Liberdade para tirar dúvidas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCard
