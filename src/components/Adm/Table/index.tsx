import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import Dropdown from "../Dropdown"
import { useRouter } from 'next/router'

interface TableProps {
    data:
    {
        schedule: {
            months:
            {
                [month: string]: {
                    [day: string]: {
                        [hour: string]: {
                            name: string,
                            product: string,
                            goal: string
                            phone: string
                            date: {
                                hour: string
                            }
                        }
                    }
                }
            }
        },
        clients: { name: string, phone: string, goal: string }[]
    }
}

const Table = ({ data }: TableProps) => {
    const router = useRouter()
    let id: string = ""
    id = `${router.query.id}`
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const currentMonth = new Date().getMonth()

    if (typeof id !== 'undefined') id = id.replace(':', '')

    const [dropVerify, setDropVerify] = useState<number | null>(null)
    function dropClicked(id: number) {
        if (id === dropVerify) {
            setDropVerify(null)
        } else {
            setDropVerify(id)
        }
    }
    const [values, setValues] = useState<{ phone: string, product: string, name: string, date: { hour: string } }[]>([])
    const [clients, setClients] = useState<{ name: string, phone: string, goal: string }[]>([])

    useEffect(() => {
        if (typeof data.schedule.months[months[currentMonth]][id] !== 'undefined') {
            setValues(Object.values(data.schedule.months[months[currentMonth]][id]))
            setClients(data.clients)
        }
    }, [data])

    return (
        <div className="flex flex-col text-zinc-300">
            <div className="flex">
                <div className="w-full flex py-3 justify-between border-b border-gray-600">
                    <h5 className="font-semibold">Nome</h5>
                </div>
            </div>
            <div>
                {values.map((key, index) => (
                    < div className="relative w-full flex flex-wrap justify-between py-6 px-2 border-b border-gray-600" >
                        <h5>{values[index].name}</h5>
                        <p className="hidden sm:block">{values[index].product}</p>
                        <p className="flex gap-2 items-center">
                            <ChevronDownIcon
                                className={`w-5 h-5 ${dropVerify === 0 ? "rotate-0" : "-rotate-90"
                                    }`}
                                onClick={(e) => dropClicked(index)}
                            />
                        </p>

                        <Dropdown
                            objective={function () {
                                let currentPerson = clients.filter((person) => person.name === values[index].name && person.phone === values[index].phone)
                                return currentPerson[0].goal
                            }}
                            hour={values[index].date.hour}
                            elementClicked={dropVerify}
                            id={index}
                            telephoneNumber={values[index].phone}
                            product={values[index].product}
                        />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Table