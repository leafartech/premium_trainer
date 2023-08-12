import Logo from "components/Logo"
import { z } from 'zod'
import axios from 'axios'
import { FormEvent, useState } from "react"

const agendaSchema = z.object({
    month: z.string().nonempty('O mês é obrigatório.'),
    days: z.string().nonempty('O dia é obrigatório.')
})

const Agendamento = () => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const days = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
    const currentMonth = new Date().getMonth() + 1

    const arraySupport: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []]

    const [month, setMonth] = useState<string>(`${months[currentMonth - 1]}-${currentMonth - 1}`)
    const [day, setDay] = useState<string>()

    for (let f = 0; f < days.length; f++) {
        for (let p = 1; p <= parseInt(days[f]); p++) {
            arraySupport[f].push(`${p}`)
        }
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()

        //Criar lógica para que o adm insira os horários disponíves.
        //Fazer verificação se os campos estão completos.
        //Criar variável do horário, implementar no formulário.
        //Fazer lógica do horário -> Vericar horários disponíveis no mês e no dia que o usuário
        //selecionou. Option disabled para os horários já marcados.

        const data = { month, day }

        await axios.post('', { data }).then((res) => {
            console.log(res)
        }).catch(e => console.log(e))
    }

    return (
        <div>
            <header className="flex items-center justify-center py-4 border-b border-white">
                <Logo third={true} />
            </header>
            <main className="px-4 pt-12 flex items-center justify-center">
                <form className="w-96 flex flex-col gap-6" onSubmit={e => formSubmited(e)}>
                    <h2 className="text-center text-white text-2xl font-semibold mb-3">Selecione a data</h2>
                    <div className="flex flex-col gap-1">
                        <label className="text-zinc-300">Selecione o mês</label>
                        <select value={month} onChange={e => {
                            setMonth(e.target.value)
                        }} className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg">
                            {months.map((month, index) => (
                                <>
                                    {currentMonth - 1 > index ? <>
                                        <option className="bg-brandBlack" disabled value={`${month}-${index}`}>{month}</option>
                                    </> : (
                                        <option className="bg-brandBlack" value={`${month}-${index}`}>{month}</option>
                                    )}
                                </>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-zinc-300">Selecione o dia</label>
                        <select value={day} onChange={e => setDay(e.target.value)} className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg">
                            {!isNaN(parseInt(month[month.length - 2])) ?
                                <>
                                    {arraySupport[parseInt(`${parseInt(month[month.length - 2])}${parseInt(month[month.length - 1])}`)].map((day, index) => (
                                        <option className="bg-brandBlack" value={arraySupport[index]}>{day}</option>
                                    ))}
                                </>
                                :
                                <>
                                    {arraySupport[parseInt(month[month.length - 1])].map((day, index) => (
                                        <option className="bg-brandBlack" value={arraySupport[index]}>{day}</option>
                                    ))}
                                </>
                            }
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center py-3 text-white font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg">
                        Finalizar agendamento
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Agendamento