import Hour from "components/Adm/Hour"
import Logo from "components/Logo"
import { useRouter } from "next/router"
import { useForm } from 'react-hook-form'
import { FormEvent, MouseEvent, useEffect, useState } from "react"
import axios from "axios"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const Configuracao = () => {
    const [access, setAccess] = useState<boolean>(false)
    const router = useRouter()
    const [currentHours, setCurrentHours] = useState<number[]>()
    const { register, handleSubmit } = useForm()
    const arrHour = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

    let auth: null | string = ''
    if (typeof window !== 'undefined') {
        auth = localStorage.getItem('train-system')
    }

    let [userEmail, setUserEmail] = useState({ email: '' })
    if (auth === null) {
        router.push('/login-adm')
    } else {
        useEffect(() => {
            setAccess(true)
            if (auth !== null) {
                setUserEmail(JSON.parse(auth))
                setCurrentHours(JSON.parse(auth).schedule.avaibleHours)
            }
        }, [])
    }

    async function formSubmited(data: any) {
        await axios.post('/api/config', { data, user: userEmail.email }).then(res => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('train-system', JSON.stringify(res.data))
            }
        }).catch(e => console.log(e))
    }

    return (
        <>
            {access && (
                <>

                    <header className="flex items-center justify-center py-4 border-b border-white">
                        <Link href="/adm" className="w-6 h-6 text-white absolute top-4 left-2 z-10 mt-[7px]"><ChevronLeftIcon /></Link>
                        <Logo />
                    </header>
                    <main className="px-4">
                        <div className="py-4">
                            <h1 className="text-white text-3xl mb-2 font-bold">
                                Horários
                            </h1>
                            <p className="text-zinc-400 text-sm">
                                Selecione os horários que você pode atender. Esses horários serão disponibilizados os clientes para realizarem o agendamento.
                            </p>
                            <p className="text-zinc-400 text-sm border rounded-lg mt-4 p-4 border-dashed border-gray-400">
                                O sistema foi criado para cada consulta durar na média de 1 hora.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(formSubmited)}>
                            <div className="grid grid-cols-4 gap-2">
                                {arrHour.map((hour, index) => (
                                    <label
                                        key={index}
                                        className={`relative w-[70px] flex flex-col justify-center items-center p-4 rounded-md cursor-pointer`}
                                        htmlFor={`f${index}`}>
                                        <input
                                            {...register(`f${index}`)}
                                            value={hour}
                                            type="checkbox"
                                            id={`f${index}`}
                                            className="absolute top-0 left-0 h-full rounded-md -z-10 w-full appearance-none border checked:bg-emerald-500 checked:border-emerald-500" />
                                        <p className="text-white">{hour}</p>
                                    </label>
                                ))}
                            </div>
                            <button type="submit" className="py-2 bg-emerald-500 text-white font-semibold text-center w-full rounded-md mt-6">Atualizar horários</button>
                        </form>
                        <div className="text-zinc-300 flex flex-col items-start gap-3 mt-6">
                            {typeof currentHours !== 'undefined' && currentHours.length > 0 ?
                                <>
                                    <h4 className="text-white text-lg font-medium">Horários selecionados anteriormente</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {currentHours?.map((hour, index) => (
                                            <p key={index}>{hour}:00</p>
                                        ))}
                                    </div>
                                </>
                                :
                                <h4 className="text-white text-lg font-medium">Você ainda não selecionou nenhum horário.</h4>
                            }
                        </div>
                    </main>
                </>
            )
            }
        </>
    )
}

export default Configuracao