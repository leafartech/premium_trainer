import { useEffect, useState } from "react"

type DropdownProps = {
  product: string | string[]
  objective: () => string
  id: number
  date?: { hour: string, day: string, month: string }
  elementClicked: number | null
  telephoneNumber: string
  isClientsVerify?: boolean
}

const Dropdown = ({ objective, product, id, elementClicked, telephoneNumber, date, isClientsVerify }: DropdownProps) => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (id === elementClicked) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [elementClicked])

  return (
    <div
      className={`w-full py-4 px-4 bg-zinc-900 mt-3 rounded-b-lg flex-col gap-3 ${show ? "flex" : "hidden"
        }`}
    >
      <div>
        <h2 className="text-zinc-500 text-xs font-semibold">PRODUTO:</h2>
        {isClientsVerify ?
          <p className="capitalize">{product[product.length - 1]}</p>
          :
          <p className="capitalize">{product}</p>
        }
      </div>
      <div>
        <h2 className="text-zinc-500 text-xs font-semibold">CONTATO:</h2>
        <p>{telephoneNumber}</p>
      </div>
      <div>
        <h2 className="text-zinc-500 text-xs font-semibold">OBJETIVO:</h2>
        <p>{objective()}</p>
      </div>
      {date && (
        <div>
          {isClientsVerify ?
            <>
              <h2 className="text-emerald-500 text-xs font-semibold">DATA:</h2>
              <p>{date.day} {date.month.split('-')[0]} {date.hour}:00</p>
            </>
            :
            <>
              <h2 className="text-emerald-500 text-xs font-semibold">HORÁRIO:</h2>
              <p>{date.hour}</p>
            </>
          }
        </div>
      )}
      {date && isClientsVerify && (
        <div>
          {(parseInt(date.day) - new Date().getDate()) > 5 ?
            <>
              <h2 className="text-emerald-500 text-xs font-semibold">RESTAM:</h2>
              <p>{(parseInt(date.day) - new Date().getDate())} dias</p>
            </>
            :
            <>
              {parseInt(date.day) - new Date().getDate() > 0 ?
                <>
                  <h2 className="text-red-500 text-xs font-semibold">RESTAM:</h2>
                  <p>{(parseInt(date.day) - new Date().getDate())} dias</p>
                </>
                :
                parseInt(date.day) - new Date().getDate() === 0 ?
                  <>
                    <h2 className="text-red-500 text-lg font-semibold">HOJE</h2>
                  </>
                  :
                  <>

                  </>
              }
            </>
          }
        </div>
      )}
    </div>
  )
}

export default Dropdown
