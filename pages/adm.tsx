import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { UserGroupIcon, WalletIcon, BriefcaseIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Template from "components/Adm/Template"
import Card from "components/Adm/Card"
import Dropdown from "components/Adm/Dropdown"
import Link from "next/link"

const Adm = () => {
  const router = useRouter()
  const [access, setAccess] = useState<boolean>(false)
  const [dropVerify, setDropVerify] = useState<number | null>(null)
  let cont: number | null = null

  let userAuth: string | null = ""

  if (typeof window !== "undefined") {
    userAuth = localStorage.getItem("train-system")
  }

  if (userAuth === null) {
    router.push("/login-adm")
  } else {
    useEffect(() => {
      setAccess(true)
    })
  }

  function dropClicked(id: number) {
    if (id === dropVerify) {
      setDropVerify(null)
    } else {
      setDropVerify(id)
    }
  }

  return <>
    {access &&
      <div>
        <header className="flex items-center justify-center py-4 border-b border-white">
          <img src="./images/logo01.png" alt="" className="h-10 w-10" />
        </header>
        <main className="px-4">
          {/* [ X ] 3 cards */}
          {/* [ X ] Tabela dos clientes */}
          {/* [   ] Agenda */}
          <div className="py-4">
            <h1 className="text-white text-3xl mb-2 font-bold">Painel administrativo</h1>
            <p className="text-zinc-400 text-sm">Aqui, você pode conferir um resumo dos seus resultados, uma tabela completa dos alunos e ainda a sua agenda.</p>
          </div>
          <div className="mt-3">
            <Template subtitle="Resumo da operação">
              <div className="flex flex-col gap-3">
                <Card
                  Icon={BriefcaseIcon}
                  topTitle="Consultas hoje"
                  mainText={`6`}
                />
                <Card
                  Icon={UserGroupIcon}
                  topTitle="Total de alunos"
                  mainText={`59`}
                />
                <Card
                  Icon={WalletIcon}
                  topTitle="Receita total"
                  mainText={`R$ 3.215`}
                />
              </div>
            </Template>
          </div>
          <div className="my-12 flex text-center">
            <Link href="/adm/agenda" className="py-4 text-white font-semibold border border-emerald-400 flex-1 rounded-md hover:bg-emerald-400">Visualizar agenda</Link>
          </div>
          <div className="mt-12 pb-32">
            <Template subtitle="Seus alunos">
              <div className="flex flex-col text-zinc-300">
                <div className="flex">
                  <div className="w-full flex py-3 justify-between border-b border-gray-600">
                    <h5 className="font-semibold">Nome</h5>
                    <h5 className="hidden sm:block">Produto</h5>
                    <h5 className="font-semibold">Data</h5>
                  </div>
                </div>
                <div>
                  <div className="relative w-full flex flex-wrap justify-between py-6 px-2 border-b border-gray-600" >
                    <h5>Arthur Gustavo</h5>
                    <p className="hidden sm:block">Consultoria Online</p>
                    <p className="flex gap-2 items-center">
                      <span>Ago 10, 2023</span>
                      <ChevronDownIcon className={`w-5 h-5 ${dropVerify === 0 ? 'rotate-0' : '-rotate-90'}`} onClick={e => dropClicked(0)} />
                    </p>
                    <Dropdown
                      days="6"
                      objective="Perder gordura e melhorar nos treinos para conseguir o shape dos sonhos."
                      elementClicked={dropVerify}
                      id={0}
                      product="Consultoria Online"
                    />
                  </div>
                </div>
              </div>
            </Template>
          </div>
        </main>
      </div>

    }
  </>
}

export default Adm
