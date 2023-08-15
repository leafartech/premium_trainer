import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import Dropdown from "components/Adm/Dropdown"
import Table from "components/Adm/Table"
import Template from "components/Adm/Template"
import Logo from "components/Logo"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const AgendaDay = () => {
  const [access, setAccess] = useState(false)
  const router = useRouter()
  let id: string | undefined | string[] = ""
  id = router.query.id

  if (typeof id !== "undefined" && typeof id !== "object") {
    id = id.replace(":", "")
  }

  let auth: string | null = ""
  const [data, setData] = useState("")
  if (typeof window !== "undefined") {
    auth = localStorage.getItem("train-system")
  }

  if (auth === null) {
    router.push("/login-adm")
  } else {
    useEffect(() => {
      setAccess(true)
      if (auth !== null) {
        setData(auth)
      }
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

  const currentMonth = new Date().getMonth()

  return (
    <>
      {access && (
        <div>
          <header className="flex items-center justify-center py-4 border-b border-brandWhite">
            <Link
              href="/adm/agenda"
              className="w-6 h-6 text-brandWhite absolute top-4 left-2 z-10 mt-[7px]"
            >
              <ChevronLeftIcon />
            </Link>
            <Logo third={true} />
          </header>
          <main className="px-4">
            <div className="py-4">
              <h1 className="text-brandWhite text-3xl mb-2 font-bold">
                Dia {id}° de {months[currentMonth]}
              </h1>
              <p className="text-zinc-400 text-sm">
                Aqui você vai encontrar todos os seus agendamentos do dia
                selecionado.
              </p>
            </div>
            <Template subtitle="Seus alunos">
              <Table data={JSON.parse(data)} />
            </Template>
          </main>
        </div>
      )}
    </>
  )
}

export default AgendaDay
