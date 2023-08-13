import { useState } from "react"
import { useForm } from 'react-hook-form'

interface HourProps {
    hour: string
    id: string
}

const Hour = ({ hour, id }: HourProps) => {
    const { register } = useForm()
    const [isSelected, setIsSelected] = useState<boolean>(false)

    return (
        <label className={`relative w-[70px] flex flex-col justify-center items-center p-4 border rounded-md cursor-pointer ${isSelected && 'bg-emerald-500 border-emerald-500 font-bold'}`} htmlFor={id}>
            <input value={id} onChange={e => setIsSelected(!isSelected)} type="checkbox" id={id} className="appearance-none absolute top-2 right-2  " />
            <p className="text-white">{hour}</p>
        </label>
    )
}

export default Hour