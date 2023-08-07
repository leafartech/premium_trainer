import { useState } from "react"
import QuestsFAQ from "./QuestsFAQ"

type FAQProps = {
  question: string;
  answer: string;
  active?: number
}

const FAQ = () => {
  const [questsFAQ, setQuestFAQ] = useState<FAQProps[]>([
    {
      question: "lorem impsuro dloddsafikakfnagga",
      answer: "vascodagamasfaknfnsanfknasfkfssfffaf",
    },
    {
      question: "lorem impsuro dloddsafikakfnagga",
      answer: "vascodagamasfaknfnsanfknasfkfssfffaf",
    },
    {
      question: "lorem impsuro dloddsafikakfnagga",
      answer: "vascodagamasfaknfnsanfknasfkfssfffaf",
    },
  ])

  return (
    <div className="w-full flex flex-col max-w-4xl justify-center items-center">
      <h4 className="text-brandWhite text-xl tracking-[0.8em] font-bold">
        FAQ
      </h4>
      {questsFAQ.map((item, index) => (
        <QuestsFAQ
          key={index}
          quest={item.question}
          answer={item.answer}
          data={item}
        />
      ))}
    </div>
  )
}
export default FAQ
export type { FAQProps }
