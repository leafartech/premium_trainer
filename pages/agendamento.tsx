import Logo from "components/Logo"
import { z } from "zod"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"

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

  const [avaibleShcedule, setAvaibleShcedule] = useState<number[]>([])
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()
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

  const [month, setMonth] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [hours, setHour] = useState<string>("")
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [product, setProduct] = useState<string>('')

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

  useEffect(() => { }, [day])

  const [error, setError] = useState('')
  const router = useRouter()
  async function formSubmited(e: FormEvent) {
    e.preventDefault()

    const data = { month, day, hours, name, phoneNumber, product }

    await axios.post("/api/agendamento", { data }).then((res) => {
      if (res.data.error) {
        setError(res.data.message)
      }

      localStorage.setItem('train-client', res.data.userData)
      router.push('/cliente') //Recuperar dados do usuário pelo localStorage na página de cliente
    })
      .catch((e) => console.log(e))
  }

  const [steps, setSteps] = useState<number>(0)
  const [stepOneVerify, setStepOneVerify] = useState<boolean>(false)

  useEffect(() => {
    if (name.length > 0 && phoneNumber.length > 0 && product.length > 0) {
      setStepOneVerify(true)
    }
  }, [name, phoneNumber, product])


  return (
    <div>
      <header className="flex items-center justify-center py-4 border-b border-brandWhite">
        <Logo third={true} />
      </header>
      <main className="px-4 pt-12 flex items-center justify-center">
        <form
          className="relative w-96 h-[396px] flex flex-col gap-6"
          onSubmit={(e) => formSubmited(e)}
        >
          {steps === 2 ?
            <>
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
                    setAvaibleHour(false)
                    setHour('')
                    setDay('')
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
                      setHour('')
                    }}
                    className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
                  >
                    <option className="bg-brandBlack">Selecionar</option>
                    {!isNaN(parseInt(month[month.length - 2])) ? ( //Verificação para ver se mês possui mais de 2 dígitos (Outubro, Novembro e Dezembro)
                      <>
                        {arraySupport[parseInt(`${parseInt(month[month.length - 2])}${parseInt(month[month.length - 1])}`)].map((day, index) => (
                          <>
                            {parseInt(month.split('-')[1]) === currentMonth - 1 && currentDay >= parseInt(day) ?
                              <option key={index} disabled className="bg-brandBlack" value={day}>
                                {day}
                              </option>
                              :
                              <option key={index} className="bg-brandBlack" value={day}>
                                {day}
                              </option>
                            }
                          </>
                        ))}
                      </>
                    ) : (
                      <>
                        {arraySupport[parseInt(month[month.length - 1])].map(
                          (day, index) => (
                            <>
                              {parseInt(month.split('-')[1]) === currentMonth - 1 && currentDay >= parseInt(day) ?
                                <option key={index} disabled className="bg-brandBlack" value={day}>
                                  {day}
                                </option>
                                :
                                <option key={index} className="bg-brandBlack" value={day}>
                                  {day}
                                </option>
                              }
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
                    value={hours}
                    onChange={(e) => {
                      setHour(e.target.value)
                      setDisabled(false)
                    }}
                    className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
                  >
                    <option className="bg-brandBlack">Selecionar</option>
                    {avaibleHour ? (
                      <>
                        {/* {console.log(userSchedule.avaibleHours)} */}
                        {typeof userSchedule !== 'undefined' && userSchedule?.avaibleHours.map((hour, index) => (
                          <>
                            {typeof userSchedule?.months[`${month.split("-")[0]}`][day] === 'undefined' ?
                              <option
                                key={index}
                                className="bg-brandBlack"
                                value={hour}
                              >
                                {hour}:00
                              </option>
                              :
                              <>
                                {typeof userSchedule?.months[`${month.split("-")[0]}`][day][hour] !== "undefined" ? (
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
                            }
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
                  type="button"
                  className="pointer-events-none w-full flex items-center justify-center py-3 text-emerald-800 font-semibold  border border-emerald-800 rounded-lg"
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
            </>
            :
            steps === 1 ?
              <div className="w-full h-full flex items-center justify-center mb-16">
                <div className="loader">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                  <div className="bar4"></div>
                  <div className="bar5"></div>
                  <div className="bar6"></div>
                  <div className="bar7"></div>
                  <div className="bar8"></div>
                  <div className="bar9"></div>
                  <div className="bar10"></div>
                  <div className="bar11"></div>
                  <div className="bar12"></div>
                </div>
              </div>
              :
              <>
                <>
                  <h2 className="text-center text-brandWhite text-2xl font-semibold mb-3">
                    Preencha os campos
                  </h2>
                  <div className="flex flex-col gap-1">
                    <label className="text-zinc-300">Digite seu nome</label>
                    <input type="text"
                      className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
                      value={name}
                      onChange={e => {
                        setName(e.target.value)
                      }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-zinc-300">Número de telefone</label>
                    <input type="text"
                      className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
                      value={phoneNumber}
                      onChange={e => {
                        setPhoneNumber(e.target.value)
                      }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-zinc-300">Selecione o produto</label>
                    <select
                      value={product}
                      onChange={(e) => {
                        setProduct(e.target.value)
                        setDisabled(false)
                      }}
                      className="outline-none text-zinc-300 py-2 px-2 bg-transparent border border-gray-600 rounded-lg"
                    >
                      <option className="bg-brandBlack">Selecionar</option>
                      <option className="bg-brandBlack" value={'avaliacao-fisica'}>Avaliação física</option>
                      <option className="bg-brandBlack" value={'consultoria-online'}>Consultoria online</option>
                      <option className="bg-brandBlack" value={'consultoria-presencial'}>Consultoria presencial</option>
                    </select>
                  </div>
                  {!stepOneVerify ?
                    <button
                      disabled
                      className="pointer-events-none w-full flex items-center justify-center py-3 text-emerald-800 font-semibold  border border-emerald-800 rounded-lg"
                    >Continuar</button>
                    :
                    <button
                      type="button"
                      onClick={e => {
                        setSteps(1)
                        setTimeout(() => {
                          setSteps(2)
                        }, 2000)
                      }
                      }
                      className="w-full flex items-center justify-center py-3 text-brandWhite font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg"
                    >Continuar</button>
                  }
                </>
              </>
          }
          {error.length > 0 && <span className="text-brandRed-500 font-medium text-[12px] px-2">{error}</span>}
        </form>
      </main>
    </div>
  )
}

export default Agendamento
