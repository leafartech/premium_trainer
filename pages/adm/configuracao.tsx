import Hour from "components/Adm/Hour"
import Logo from "components/Logo"
import { useRouter } from "next/router"
import { useForm } from 'react-hook-form'
import { FormEvent, MouseEvent, useEffect, useState } from "react"

const Configuracao = () => {
    const [access, setAccess] = useState<boolean>(false)
    const router = useRouter()
    const [currentHours, setCurrentHours] = useState<number[]>()
    const { register, handleSubmit } = useForm()
    const arrHour = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
    const [selectedItems, setSelectedItems] = useState<number[]>([])

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
                setCurrentHours(JSON.parse(auth))
            }
        }, [])
    }

    function formSubmited(data: any) {
        console.log(data)
    }

    function itemClicked(index: number) {
        //Selected items é um array de numbers que armazena o index de todos os horários marcados

        const isRepeated = selectedItems.includes(index)

        // if (isRepeated) {
        //     let backup = [...selectedItems]
        //     const novoArray = backup.filter(item => item !== index);

        //     setSelectedItems(novoArray)
        // } else {
        setSelectedItems((prevState) => ([
            ...prevState,
            index
        ]))
        // }
    }

    return (
        <>
            {access && (
                <>

                    <header className="flex items-center justify-center py-4 border-b border-white">
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
                        <form className="" onSubmit={handleSubmit(formSubmited)}>
                            <input type="hidden" value={userEmail.email} name="user" />
                            <div className="grid grid-cols-4 gap-2">
                                {arrHour.map((hour, index) => (
                                    <label
                                        onClick={e => itemClicked(index)}
                                        className={`relative w-[70px] flex flex-col justify-center items-center p-4 border rounded-md cursor-pointer ${selectedItems.includes(index) && 'bg-emerald-500 border-emerald-500'}`}
                                        htmlFor={`f${index}`}>
                                        <input
                                            {...register(`f${index}`)}
                                            value={hour}
                                            type="checkbox"
                                            id={`f${index}`}
                                            className="appearance-none absolute top-2 right-2  " />
                                        <p className="text-white">{hour}</p>
                                    </label>
                                ))}
                            </div>
                            <button type="submit" className="py-2 bg-emerald-500 text-white font-semibold text-center w-full rounded-md mt-6">Atualizar horários</button>
                        </form>
                    </main>
                </>
            )}
        </>
    )
}

export default Configuracao