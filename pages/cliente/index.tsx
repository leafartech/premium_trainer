import { ChevronLeftIcon, CalendarDaysIcon, PhoneIcon, UserIcon, StarIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import Card from "components/Adm/Card"
import Template from "components/Adm/Template"
import Logo from "components/Logo"
import Link from "next/link"
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from "react"

const Cliente = () => {
    const router = useRouter()
    const [access, setAccess] = useState<boolean>(false)
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const [goal, setGoal] = useState<string>('')

    let auth: null | string = null
    if (typeof window !== 'undefined') {
        auth = localStorage.getItem('train-client')
    }

    const [favoriteProduct, setFavoriteProduct] = useState("")

    function encontrarStringMaisRepetida(array: any) {
        const contador: any = {};

        const stringMaisRepetida = array.reduce((maisRepetida: number, string: string) => {

            contador[string] = (contador[string] || 0) + 1;

            if (contador[string] > (contador[maisRepetida] || 0)) {
                return string;
            } else {
                return maisRepetida;
            }

        }, "");

        return stringMaisRepetida;
    }

    const [data, setData] = useState<{ name: string, phone: string, product: string[] }>()
    const [schedule, setSchedule] = useState<string>("")
    if (typeof window !== 'undefined' && auth === null) {
        router.push('/cliente/login-cliente')
    } else {
        useEffect(() => {
            setAccess(true)
            if (auth !== null) {
                setData(JSON.parse(auth))
                setGoal(JSON.parse(auth).goal)
                setFavoriteProduct(encontrarStringMaisRepetida(JSON.parse(auth).product))
                setSchedule(`${JSON.parse(auth).date.day} ${months[JSON.parse(auth).date.month.split('-')[1]]}  ${JSON.parse(auth).date.hour} horas`)
            }
        }, [])
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()

        const dataPost = { name: data?.name, phone: data?.phone, goal }

        await axios.post('/api/cliente', { dataPost }).then((res) => {

            localStorage.setItem('train-client', JSON.stringify(res.data.user))

        }).catch(e => console.log(e))
    }

    return (
        <>
            {access && (
                <>
                    <header className="flex items-center justify-center py-4 border-b border-brandWhite">
                        <Link
                            href="/"
                            className="w-6 h-6 text-brandWhite absolute top-4 left-2 z-10 mt-[7px]"
                        >
                            <ChevronLeftIcon />
                        </Link>
                        <Logo />
                    </header>
                    <main className="px-4">
                        <div className="py-4 mt-4 border border-dashed border-emerald-500 bg-emerald-200/20 rounded-md">
                            <p className="text-emerald-500 text-center">Obrigado por confiar no meu trabalho.<br /> Te aguardo em breve!</p>
                        </div>
                        <div className="mt-6">
                            <Template subtitle="Agenda">
                                <Card
                                    Icon={CalendarDaysIcon}
                                    topTitle="Próxima consulta"
                                    mainText={`${schedule}`}
                                    size={true}
                                />
                            </Template>
                        </div>
                        <div className="mt-6">
                            <Template subtitle="Seus dados">
                                <div className="flex flex-col gap-3 py-4 border px-4 border-dashed border-zinc-500 rounded-md">
                                    <div className="flex flex-row gap-3 items-center text-zinc-300">
                                        <div className="border rounded-md p-2">
                                            <UserIcon className="h-6 w-6 text-zinc-300" />
                                        </div>
                                        <div>
                                            <p>Nome:</p>
                                            <p>{data!.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center text-zinc-300">
                                        <div className="border rounded-md p-2">
                                            <PhoneIcon className="h-6 w-6 text-zinc-300" />
                                        </div>
                                        <div>
                                            <p>Número de contato:</p>
                                            <p>{data!.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center text-zinc-300">
                                        <div className="border rounded-md p-2">
                                            <StarIcon className="h-6 w-6 text-zinc-300" />
                                        </div>
                                        <div>
                                            <p>Produto favorito:</p>
                                            <p className="capitalize">{favoriteProduct}</p>
                                        </div>
                                    </div>
                                </div>
                            </Template>
                        </div>
                        <div className="mt-6">
                            <Template subtitle="Melhore sua experiência">
                                <form className="" onSubmit={e => formSubmited(e)}>
                                    <div className="flex flex-col gap-3 py-4 border px-4 border-dashed border-zinc-500 rounded-md text-zinc-300">
                                        <label>Descreva seu objetivo</label>
                                        <textarea rows={4} value={goal} onChange={e => setGoal(e.target.value)} className="bg-transparent border px-4 py-2 rounded-lg border-gray-600 focus:outline-none focus:border-gray-400" />
                                        <button type="submit" className="w-full flex items-center justify-center py-2 text-brandWhite font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg">
                                            Salvar
                                        </button>
                                    </div>
                                </form>
                            </Template>
                        </div>
                    </main>
                </>
            )
            }
        </>
    )
}

export default Cliente