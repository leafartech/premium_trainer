import { useEffect, useState } from "react"

interface DropdownProps {
    product: string
    objective: string
    days?: string
    id: number
    elementClicked: number | null
    telephoneNumber: string
}

const Dropdown = ({ days, objective, product, id, elementClicked, telephoneNumber }: DropdownProps) => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        if (id === elementClicked) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [elementClicked])

    return (
        <div className={`w-full py-4 px-4 bg-zinc-900 mt-3 rounded-b-lg flex-col gap-3 ${show ? 'flex' : 'hidden'}`}>
            <div>
                <h2 className="text-zinc-500 text-xs font-semibold">PRODUTO:</h2>
                <p>{product}</p>
            </div>
            <div>
                <h2 className="text-zinc-500 text-xs font-semibold">CONTATO:</h2>
                <p>{telephoneNumber}</p>
            </div>
            <div>
                <h2 className="text-zinc-500 text-xs font-semibold">OBJETIVO:</h2>
                <p>{objective}</p>
            </div>
            {days && (
                <div>
                    <h2 className="text-emerald-500 text-xs font-semibold">{days} DIAS PARA A CONSULTA.</h2>
                </div>
            )}
        </div>
    )
}

export default Dropdown