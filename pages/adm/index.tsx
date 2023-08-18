import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"
import Template from "components/Adm/Template"
import Card from "components/Adm/Card"
import Link from "next/link"
import Logo from "components/Logo"
import axios from "axios"
import { DataProps } from "types/dataProps"
import Table from "components/Adm/Table"

const Adm = () => {
  const router = useRouter()
  const [access, setAccess] = useState(false)
  const [data, setData] = useState<DataProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  let userAuth: string | null = ""

  if (typeof window !== "undefined") {
    userAuth = localStorage.getItem("train-system")
    useEffect(() => {
      if (userAuth !== null) {
        setData(JSON.parse(userAuth))
      }
    }, [])
  }

  if (userAuth === null) {
    router.push("/login-adm")
  } else {
    useEffect(() => {
      setAccess(true)
    })
  }

  async function updateData() {
    setIsLoading(true)
    await axios.get(('/api/updateData')).then(res => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('train-system', JSON.stringify(res.data))
        setData(res.data)
      }
      setIsLoading(false)
    }).catch(e => console.log(e))
  }

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()

  return (
    <>
      {access && (
        <div>
          <header className="flex items-center justify-center py-4 border-b border-brandWhite">
            <Logo />
          </header>
          <main className="px-4">
            <div className="py-4">
              <h1 className="text-brandWhite text-3xl mb-2 font-bold">
                Painel administrativo
              </h1>
              <p className="text-zinc-400 text-sm">
                Aqui, você pode conferir um resumo dos seus resultados, uma
                tabela completa dos alunos e ainda acessar a sua agenda.
              </p>
            </div>
            <div className="mt-3">
              <Template subtitle="Resumo da operação">
                <div className="flex flex-col gap-3">
                  <Card
                    Icon={BriefcaseIcon}
                    topTitle="Consultas hoje"
                    // mainText=""
                    mainText={`${typeof data?.schedule.months[months[currentMonth]][currentDay] !== 'undefined' ? Object.keys(data?.schedule.months[months[currentMonth]][currentDay]).length : '0'}`}
                  />
                  <Card
                    Icon={UserGroupIcon}
                    topTitle="Total de alunos"
                    mainText={`${data?.clients.length}`}
                  />
                </div>
              </Template>
            </div>
            <div className="my-12 flex text-center flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/adm/agenda"
                  className="py-4 text-brandWhite font-semibold border border-emerald-400 flex-1 rounded-md hover:bg-emerald-400"
                >
                  Agenda
                </Link>
                <button onClick={e => updateData()} className="flex flex-col sm:flex-row items-center justify-center gap-2 py-4 text-brandWhite font-semibold border border-emerald-400 flex-1 rounded-md hover:bg-emerald-400">
                  {isLoading ?
                    <>
                      <svg className="loader" viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                      </svg>
                      Atualizando...
                    </>
                    :
                    <>
                      Atualizar
                    </>
                  }
                </button>
              </div>
              <Link
                href="/adm/configuracao"
                className="py-4 text-brandWhite font-semibold border border-emerald-400 flex-1 rounded-md hover:bg-emerald-400"
              >
                Configuração
              </Link>
            </div>
            <div className="mt-12 pb-32">
              <Template subtitle="Seus alunos">
                <div className="flex flex-col text-zinc-300">
                  {typeof data !== 'undefined' && (
                    <Table
                      data={data}
                      isClientsVerify={true}
                    />
                  )}
                </div>
              </Template>
            </div>
          </main>
        </div>
      )}
    </>
  )
}

export default Adm
