import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import Dropdown from "components/Adm/Dropdown"
import Template from "components/Adm/Template"
import Logo from "components/Logo"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const AgendaDay = () => {
    const [access, setAccess] = useState<boolean>(false)
    const router = useRouter()
    let id: string | undefined | string[] = ''
    id = router.query.id

    if (typeof id !== 'undefined' && typeof id !== 'object') {
        id = id.replace(':', '')
    }

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

    const [dropVerify, setDropVerify] = useState<number | null>(null)
    function dropClicked(id: number) {
        if (id === dropVerify) {
            setDropVerify(null)
        } else {
            setDropVerify(id)
        }
    }

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const currentMonth = new Date().getMonth()

    return (
        <>
            {access && (
                <div>
                    <header className="flex items-center justify-center py-4 border-b border-white">
                        <Link href="/adm/agenda" className="w-6 h-6 text-white absolute top-4 left-2 z-10 mt-[7px]"><ChevronLeftIcon /></Link>
                        <Logo third={true} />
                    </header>
                    <main className="px-4">
                        <div className="py-4">
                            <h1 className="text-white text-3xl mb-2 font-bold">
                                Dia {id}° de {months[currentMonth]}
                            </h1>
                            <p className="text-zinc-400 text-sm">
                                Aqui você vai encontrar todos os seus agendamentos do dia selecionado.
                            </p>
                        </div>
                        <Template subtitle="Seus alunos">
                            <div className="flex flex-col text-zinc-300">
                                <div className="flex">
                                    <div className="w-full flex py-3 justify-between border-b border-gray-600">
                                        <h5 className="font-semibold">Nome</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative w-full flex flex-wrap justify-between py-6 px-2 border-b border-gray-600">
                                        <h5>Arthur Gustavo</h5>
                                        <p className="hidden sm:block">Consultoria Online</p>
                                        <p className="flex gap-2 items-center">
                                            <ChevronDownIcon
                                                className={`w-5 h-5 ${dropVerify === 0 ? "rotate-0" : "-rotate-90"
                                                    }`}
                                                onClick={(e) => dropClicked(0)}
                                            />
                                        </p>
                                        <Dropdown
                                            objective="Perder gordura e melhorar nos treinos para conseguir o shape dos sonhos."
                                            elementClicked={dropVerify}
                                            id={0}
                                            telephoneNumber="(73) 9 9959-9911"
                                            product="Consultoria Online"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Template>
                    </main>
                </div>
            )}
        </>
    )
}

export default AgendaDay