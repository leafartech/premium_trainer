import Link from "next/link"
import { useEffect, useState } from "react"

import { DataProps } from "types/dataProps"
const Schedule = () => {
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

  const currentMonth = new Date().getMonth()

  const qDays: string[] = []
  for (let p = 0; p < parseInt(days[currentMonth]) + 1; p++) {
    qDays.push(" ")
  }

  const [data, setData] = useState<DataProps>()

  if (typeof window !== "undefined") {
    useEffect(() => {
      let hlp = localStorage.getItem("train-system")
      if (hlp !== null) {
        setData(JSON.parse(hlp))
      }
    }, [])
  }

  return (
    <div
      className={`flex flex-wrap gap-2 ${
        days[currentMonth] === "28" ? "justify-center" : "justify-between"
      }`}
    >
      {typeof data !== "undefined" &&
        console.log(data.schedule.months[months[currentMonth]])}
      {typeof data !== "undefined" &&
        Object.keys(data).length > 0 &&
        qDays.map((item: string, index: number) => (
          <>
            {index > 0 && (
              <Link
                href={`/adm/agenda/:${index}`}
                className="relative w-1/6 p-4 border border-emerald-400 rounded-md flex items-center justify-center"
              >
                {typeof data.schedule.months[months[currentMonth]][index] !==
                  "undefined" && (
                  <>
                    <span className="flex items-center justify-center absolute -top-1 -right-1 text-white font-bold h-5 w-5 text-sm rounded-full bg-emerald-500">
                      {
                        Object.keys(
                          data.schedule.months[months[currentMonth]][index]
                        ).length
                      }
                    </span>
                  </>
                )}
                <span className="text-brandWhite font-semibold">{index}</span>
              </Link>
            )}
          </>
        ))}
    </div>
  )
}

export default Schedule
