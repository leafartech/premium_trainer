import { useState } from "react"
import { FaChevronRight } from "react-icons/fa6"
import { FAQProps } from ".."

type QuestsFAQProps = {
  quest: string
  answer: string
  data: FAQProps
}
const QuestsFAQ = ({ quest, answer, data }: QuestsFAQProps ) => {
  const [item, setItem] = useState(data)
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1
    setItem({...item, active: newActive})
  }
  return (
    <div className={`flex flex-col w-full items-center max-w-4xl duration-500 py-4 group ${ item.active === 1  ? "is-active bg-brandBlack" : ""}`}>      
          <button
            onClick={handleToggleActive}
            className="flex justify-between p-2 border-b border-b-brandRed-500 rounded-md w-full text-brandWhite  group-[.is-active]:font-bold"
          >
            {quest}
            <div className="text-xl rotate-90 duration-500 group-[.is-active]:rotate-[-270deg]">
              <FaChevronRight size={24} />
            </div>
          </button>
          <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[200px]">
            <p className="text-brandWhite mt-2 text-justify">
              {answer}
            </p>
          </div>
    </div>
  )
}

export default QuestsFAQ