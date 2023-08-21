import ButtonCTA from "components/ButtonCTA"
import { useState } from "react"

type PurchaseCardProps = {
  titleCard: string
  descriptionCard: string
  valueOff: string
  valueOn: string
  href: string
  hrefList: string[]
}

const PurchaseCard = ({
  titleCard,
  descriptionCard,
  valueOff,
  valueOn,
  href,
  hrefList
}: PurchaseCardProps) => {
  const [highlited, setHighlited] = useState<boolean>(false)

  return (
    <div className="w-full lg:w-[540px] xl:w-[640px] purchase-card flex flex-col gap-3 justify-center px-4 py-8">
      <div className="md:grid md:grid-cols-3">
        <div className="flex flex-col md:col-span-2 w-full gap-1 mb-3">
          <h3 className="text-2xl md:text-3xl text-brandWhite font-semibold">
            {titleCard}
          </h3>
          <h4 className="text-zinc-300 text-sm md:text-base">
            {descriptionCard}
          </h4>
        </div>
        <div className="flex md:flex-col w-full justify-between items-center mb-3">
          <span className="text-zinc-300">
            de{" "}
            <s className="text-brandWhite md:text-lg font-bold">
              R${valueOff},99
            </s>{" "}
            por
          </span>
          <div className="flex flex-col">
            <span className="text-5xl md:text-5xl text-brandWhite font-extrabold">
              R${(parseInt(valueOn) / 30).toFixed(0)}
              <span className="text-zinc-300 text-lg"> / dia</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        {hrefList.length > 1 ?
          <button onClick={e => setHighlited(!highlited)} className="btn-shadow block bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold">Quero agendar um horário</button>
          :
          <a href={hrefList[0]} className="btn-shadow block bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold">Quero agendar um horário</a>
        }

      </div>
      <div className="flex flex-col gap-3 mt-3 w-full">
        {hrefList.length > 1 &&
          <div className="flex items-center gap-3">
            <img
              src="./images/checkIcon3.png"
              alt="Ícone de check"
              className="h-5 w-5 md:h-6 md:w-6"
            />
            <p className={`text-brandWhite md:text-lg ${highlited && 'border border-zinc-500 rounded-md bg-zinc-700'}`}>
              <>
                {highlited ? 'Selecionar plano:' : 'Planos'}
                <a href={`${hrefList[0]}`} className="text-red-500 font-medium uppercase"> mensal</a>,
                <a href={`${hrefList[1]}`} className="text-red-500 font-medium uppercase"> trimestral</a>,
                <a href={`${hrefList[2]}`} className="text-red-500 font-medium uppercase"> semetral</a> e
                <a href={`${hrefList[3]}`} className="text-red-500 font-medium uppercase"> anual</a>.
              </>
            </p>
          </div>
        }
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">
            Agendamento simplificado.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">Estratégia exclusiva.</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">Acesso a aplicativo no celular.</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">
            Análise detalhada dos objetivos.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">
            Acompanhamento de resultados.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="./images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <p className="text-brandWhite md:text-lg">
            Liberdade para tirar dúvidas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCard
