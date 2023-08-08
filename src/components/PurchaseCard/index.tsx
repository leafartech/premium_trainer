import { CheckIcon } from "@heroicons/react/24/outline"
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
    <div className="w-full purchase-card flex flex-col gap-3 justify-center p-8">
      <div className="flex flex-col w-full gap-1">
        <h3 className="text-xl text-brandWhite">{titleCard}</h3>
        <h4 className="text-zinc-300">{descriptionCard}</h4>
      </div>
      <div className="flex w-full justify-between items-center">
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
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <CheckIcon className="text-brandRed-500 w-6 h-6" />
          <p className="text-brandWhite">Agendamento simplificado</p>
        </div>
        <div className="flex items-center">
          <CheckIcon className="text-brandRed-500 w-6 h-6" />
          <p className="text-brandWhite">Estratégia exclusiva</p>
        </div>
        <div className="flex items-center">
          <CheckIcon className="text-brandRed-500 w-6 h-6" />
          <p className="text-brandWhite">
            Análise detalhada dos objetivos
          </p>
        </div>
        <div className="flex items-center">
          <CheckIcon className="text-brandRed-500 w-6 h-6" />
          <p className="text-brandWhite">
            Acompanhamento de resultados
          </p>
        </div>
        <div className="flex items-center">
          <CheckIcon className="text-brandRed-500 w-6 h-6" />
          <p className="text-brandWhite">
            Liberdade para tirar dúvidas
          </p>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCard
