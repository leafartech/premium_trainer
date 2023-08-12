import Link from "next/link"

const Schedule = () => {
    const days = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

    const currentMonth = new Date().getMonth() - 5

    const qDays: string[] = []
    for (let p = 0; p < parseInt(days[currentMonth]); p++) {
        qDays.push(' ')
    }

    return (
        <div className={`flex flex-wrap gap-2 ${days[currentMonth] === '28' ? 'justify-center' : 'justify-between'}`}>
            {qDays.map((item: string, index: number) => (
                <Link href={`/adm/agenda/:${index + 1}`} className="w-1/6 p-4 border border-emerald-400 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold">{index + 1}</span>
                </Link>
            ))}
        </div>
    )
}

export default Schedule