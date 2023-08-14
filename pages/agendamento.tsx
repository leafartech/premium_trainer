import Logo from "components/Logo"
import { z } from "zod"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"

const agendaSchema = z.object({
  month: z.string().nonempty("O mês é obrigatório."),
  days: z.string().nonempty("O dia é obrigatório.")
}) // Está usando?

type UserScheduleProps = {
  avaibleHours: string[]
  months: {
    [month: string]: {
      [day: string]: {
        [hour: string]: {}[]
      }
    }
  }
}

const Agendamento = () => {
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
  const days = [
    "31",
    "28",
    "31",
    "30",
    "31",
    "30",
    "31",
    "31",
    "30",
    "31",
    "30",
    "31"
  ]
  const currentMonth = new Date().getMonth() + 1
  const [disabled, setDisabled] = useState(true)
  const [avaibleDay, setAvaibleDay] = useState(false)
  const [avaibleHour, setAvaibleHour] = useState(false)

  const arraySupport: string[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]

  const [month, setMonth] = useState<string>("")
  const [day, setDay] = useState<string>("")
  const [hours, setHour] = useState<string>("")

  for (let f = 0; f < days.length; f++) {
    for (let p = 1; p <= parseInt(days[f]); p++) {
      arraySupport[f].push(`${p}`)
    }
  }

  const [userSchedule, setUserSchedule] = useState<UserScheduleProps>()
  useEffect(() => {
    axios
      .get("/api/avaibleHours")
      .then((res) => {
        setUserSchedule(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {}, [day])
  // console.log(day)

  async function formSubmited(e: FormEvent) {
    e.preventDefault()

    //Criar lógica para que o adm insira os horários disponíves.
    //Fazer verificação se os campos estão completos.
    //Criar variável do horário, implementar no formulário.
    //Fazer lógica do horário -> Vericar horários disponíveis no mês e no dia que o usuário
    //selecionou. Option disabled para os horários já marcados.

    const data = { month, day }

    await axios
      .post("", { data })
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <header className="flex items-center justify-center py-4 border-b border-brandWhite">
        <Logo third={true} />
      </header>
      <main className="px-4 pt-12 flex items-center justify-center">
        <form
          className="w-96 flex flex-col gap-6"
          onSubmit={(e) => formSubmited(e)}
        >
          <h2 className="text-center text-brandWhite text-2xl font-semibold mb-3">
            Selecione a data
          </h2>
          <div className="flex flex-col gap-1">
            <label className="text-zinc-300">Selecione o mês</label>
            <select
              value={month}
              onChange={(e) => {
                setMonth(e.target.value)
                setAvaibleDay(true)
              }}
              className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
            >
              <option className="bg-brandBlack">Selecionar</option>
              {months.map((month, index) =>
                currentMonth - 1 > index ? (
                  <>
                    <option
                      key={index}
                      className="bg-brandBlack"
                      disabled
                      value={`${month}-${index}`}
                    >
                      {month}
                    </option>
                  </>
                ) : (
                  <option
                    key={index}
                    className="bg-brandBlack"
                    value={`${month}-${index}`}
                  >
                    {month}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-zinc-300">Selecione o dia</label>
            {avaibleDay ? (
              <select
                value={day}
                onChange={(e) => {
                  setDay(e.target.value)
                  setAvaibleHour(true)
                }}
                className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
              >
                <option className="bg-brandBlack">Selecionar</option>
                {!isNaN(parseInt(month[month.length - 2])) ? ( //Verificação para ver se mês possui mais de 2 dígitos (Outubro, Novembro e Dezembro)
                  <>
                    {arraySupport[
                      parseInt(
                        `${parseInt(month[month.length - 2])}${parseInt(
                          month[month.length - 1]
                        )}`
                      )
                    ].map((day, index) => (
                      <option key={index} className="bg-brandBlack" value={day}>
                        {day}
                      </option>
                    ))}
                  </>
                ) : (
                  <>
                    {arraySupport[parseInt(month[month.length - 1])].map(
                      (day, index) => (
                        <>
                          <option
                            key={index}
                            className="bg-brandBlack"
                            value={day}
                          >
                            {day}
                          </option>
                        </>
                      )
                    )}
                  </>
                )}
              </select>
            ) : (
              <select
                disabled
                className="outline-none text-zinc-400 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
              >
                <option className="bg-brandBlack">
                  Primeiro, selecione o mês
                </option>
              </select>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-zinc-300">Selecione o horário</label>
            {avaibleHour ? (
              <select
                value={day}
                onChange={(e) => setHour(e.target.value)}
                className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
              >
                {avaibleHour ? (
                  <>
                    {userSchedule?.avaibleHours.map((hour, index) => (
                      <>
                        {typeof userSchedule?.months[`${month.split("-")[0]}`][
                          day
                        ][hour] !== "undefined" ? (
                          <option
                            key={index}
                            className="bg-brandBlack"
                            value={hour}
                            disabled
                          >
                            {hour}:00
                          </option>
                        ) : (
                          <option
                            key={index}
                            className="bg-brandBlack"
                            value={hour}
                          >
                            {hour}:00
                          </option>
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </select>
            ) : (
              <select
                disabled
                className="outline-none text-zinc-400 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
              >
                <option className="bg-brandBlack">
                  Primeiro, selecione o dia
                </option>
              </select>
            )}
          </div>
          {disabled ? (
            <button
              disabled
              type="submit"
              className="w-full flex items-center justify-center py-3 text-emerald-800 font-semibold  border border-emerald-800 rounded-lg"
            >
              Finalizar agendamento
            </button>
          ) : (
            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 text-brandWhite font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg"
            >
              Finalizar agendamento
            </button>
          )}
        </form>
      </main>
    </div>
  )
}

export default Agendamento
