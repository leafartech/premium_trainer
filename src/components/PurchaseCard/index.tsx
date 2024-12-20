import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Kiwify } from '../Icons/Kiwify'

interface PurchaseCardProps {
  titleCard: string
  descriptionCard: string
  valueOff: string
  valueOn: string
  hrefList: string[]
}

const PurchaseCard = ({
  titleCard,
  descriptionCard,
  valueOff,
  valueOn,
  hrefList,
}: PurchaseCardProps) => {
  return (
    <div className="w-full lg:w-[540px] xl:w-[640px] purchase-card flex flex-col gap-3 justify-center px-4 py-8">
      <div className="hidden sm:flex sm:justify-center sm:mt-3 sm:gap-1">
        <Image
          src="/images/logo01.png"
          alt="Imagem do João Navarro"
          quality={100}
          width={80}
          height={80}
          className="hidden sm:block"
        />
      </div>
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
            de{' '}
            <s className="text-brandWhite md:text-lg font-bold">
              R${valueOff},99
            </s>{' '}
            por
          </span>
          <div className="flex flex-col">
            <span className="text-5xl md:text-5xl text-brandWhite font-extrabold">
              R${(Number.parseInt(valueOn) / 30).toFixed(0)}
              <span className="text-zinc-300 text-lg"> / dia</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        {hrefList.length > 1 ? (
          <div className="grid grid-cols-2 gap-3">
            <a
              target="_blank"
              href={`${hrefList[0]}`}
              className="text-center rounded-md hover:bg-brandRed-500 hover:text-white hover:font-semibold border border-brandRed-500 py-2 text-brandRed-500 font-medium uppercase"
              rel="noreferrer"
            >
              mensal
            </a>
            <a
              target="_blank"
              href={`${hrefList[1]}`}
              className="btn-shadow text-center rounded-md bg-brandRed-500 text-white font-semibold border border-brandRed-500 py-2 uppercase relative"
              rel="noreferrer"
            >
              <span className="absolute -top-2 -right-1 bg-brandWhite rounded-full w-5 h-5 flex justify-center items-center">
                <StarIcon className="h-4 w-4 text-brandRed-500" />
              </span>
              trimestral
            </a>
            <a
              target="_blank"
              href={`${hrefList[2]}`}
              className="text-center rounded-md hover:bg-brandRed-500 hover:text-white hover:font-semibold border border-brandRed-500 py-2 text-brandRed-500 font-medium uppercase"
              rel="noreferrer"
            >
              semestral
            </a>
            <a
              target="_blank"
              href={`${hrefList[3]}`}
              className="text-center rounded-md hover:bg-brandRed-500 hover:text-white hover:font-semibold border border-brandRed-500 py-2 text-brandRed-500 font-medium uppercase"
              rel="noreferrer"
            >
              anual
            </a>
            <a
              target="_blank"
              href={`${hrefList[4]}`}
              className="text-center rounded-md hover:bg-brandRed-500 hover:text-white hover:font-semibold border border-brandRed-500 py-2 text-brandRed-500 font-medium uppercase"
              rel="noreferrer"
            >
              Mensal Recorrente
            </a>
          </div>
        ) : (
          <a
            target="_blank"
            href={hrefList[0]}
            className="btn-shadow block bg-brandRed-500 w-full rounded-md text-center uppercase text-brandWhite py-3 font-bold"
            rel="noreferrer"
          >
            Quero agendar um horário
          </a>
        )}
      </div>
      <div className="flex flex-col gap-3 mt-3 w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Entrarei em contato em até 72h após o pagamento,{' '}
            <strong>para o agendamento da consulta.</strong>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Agendamento simplificado.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">Estratégia exclusiva.</p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Acesso a aplicativo no celular.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Análise detalhada dos objetivos.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Acompanhamento de resultados.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">
            Liberdade para tirar dúvidas.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/checkIcon3.png"
            alt="Ícone de check"
            className="h-5 w-5 md:h-6 md:w-6"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-brandWhite md:text-lg">7 dias de garantia.</p>
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-1">
        <Kiwify />
        <div className="text-white text-xs font-semibold">| Compra segura</div>
      </div>
    </div>
  )
}

export default PurchaseCard
