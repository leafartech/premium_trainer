import { useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { FAQProps } from ".."

type QuestsFAQProps = {
  quest: string
  answer: string
  data: FAQProps
}
const QuestsFAQ = ({ quest, answer, data }: QuestsFAQProps) => {
  const [item, setItem] = useState(data)
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1
    setItem({ ...item, active: newActive })
  }

  return (
    <div
      className={`flex flex-col w-full items-center duration-500 py-4 group ${item.active === 1 ? "is-active bg-brandBlack" : ""
        }`}
    >
      <button
        onClick={handleToggleActive}
        className="flex justify-between items-center p-2 border-b border-b-brandRed-500 rounded-md w-full text-lg sm:text-2xl text-brandWhite  group-[.is-active]:font-bold"
      >
        {quest}
        <div className="rotate-90 duration-500 group-[.is-active]:rotate-[0deg]">
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      </button>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[200px] px-2">
        <p className="text-zinc-300 text-sm sm:text-lg mt-2 text-justify">{answer}</p>
      </div>
    </div>
  )
}

export default QuestsFAQ
