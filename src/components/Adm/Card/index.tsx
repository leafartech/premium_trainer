import { ElementType } from "react"

interface CardProps {
    Icon: ElementType
    topTitle: string
    mainText: string
}

const Card = ({ Icon, mainText, topTitle }: CardProps) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-4 p-4 border border-gray-600 rounded-lg">
                <div className="p-4 rounded-md bg-emerald-50">
                    <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                    <span className="text-zinc-300">{topTitle}</span>
                    <h3 className="text-emerald-400 text-4xl font-bold">{mainText}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card