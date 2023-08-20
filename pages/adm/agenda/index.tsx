import Schedule from "components/Adm/Schedule"
import Template from "components/Adm/Template"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Logo from "components/Logo"

const Agenda = () => {
  const [access, setAccess] = useState(false)
  const router = useRouter()

  let auth: string | null = ""
  if (typeof window !== "undefined") {
    auth = localStorage.getItem("train-system")
  }

  if (auth === null) {
    router.push("/login-adm")
  } else {
    useEffect(() => {
      setAccess(true)
    }, [])
  }

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]

  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())

  return (
    <>
      {access && (
        <div>
          <header className="flex items-center justify-center py-4 border-b border-brandWhite">
            <Link
              href="/adm"
              className="w-6 h-6 text-brandWhite absolute top-4 left-2 z-10 mt-[7px]"
            >
              <ChevronLeftIcon />
            </Link>
            <Logo />
          </header>
          <main className="px-4">
            <div className="py-4 relative">
              <h1 className="text-brandWhite text-3xl mb-2 font-bold">
                Agenda
              </h1>
              <select onChange={e => setCurrentMonth(parseInt(e.target.value))} className="absolute top-4 left-32 cursor-pointer outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg">
                {months.map((month, index) => (
                  <>
                    {month === months[currentMonth] ?
                      <option key={index} value={index} className="bg-zinc-900" selected>{month}</option>
                      :
                      <option key={index} value={index} className="bg-zinc-900">{month}</option>
                    }
                  </>
                ))}
              </select>
              <p className="text-zinc-400 text-sm">
                Para conferir a sua agenda, basta clicar no dia escolhido e que
                será redirecionado a uma página personalizada com os agendamenos
                do dia.
              </p>
            </div>
            <Template subtitle={`Dias de ${months[currentMonth]}:`}>
              <Schedule months={months} currentMonth={currentMonth} />
            </Template>
          </main>
        </div>
      )}
    </>
  )
}

export default Agenda
