import { useState } from "react"
import QuestsFAQ from "./QuestsFAQ"

type FAQProps = {
  question: string
  answer: string
  active?: number
}

const FAQ = () => {
  const [questsFAQ, setQuestFAQ] = useState<FAQProps[]>([
    {
      question: "Onde fica a clínica que você atende?",
      answer:
        "Em Ilhéus/Ba Endereço rua nossa senhora aparecida, n° 581. É uma galera de salas comereciais do outro lado da rua do cemitério do Nelson Costa um pouco mais para frente. Quando chegar na galeria, você deverá subir as escadas que se econtram logo á esquerda. A sala da clínica fica ao final do corredor, á esquerda, após subir as escadas!"
    },
    {
      question: "O que é um treino individualizado?",
      answer:
        "É um treino voltado ás suas necessidades/especificidades físicas, biológicas e anatômicas do seu corpo, onde é feita uma análise minuciosa para te ajudarmos na busca do seu objetivo."
    },
    {
      question: "Para que serve a avaliação postural?",
      answer:
        "Para descobrirmos se você tem algum desalinhamento/desnível funcional/estrutural, como: escoliose, cifose, protusão de ombros, entre outros. Detectando esses problemas posturais, vamos corrigi-los com exercícios específicos + mobilidades e alongamentos, trazendo assim seu corpo para um funcionamento mais adequado, te livrando de dores e desconfortos musculares/articulares."
    },
    {
      question: "Como funciona o APP de treino?",
      answer:
        "Ele funciona da seguinte forma. Você terá vídeos explicativos, mostrando quais são os seus exercícios que estarão no seu protocolo, espaço para anotar os pesos utilizados, quantidade de séries/repetições dos exercícios, e o devido tempo de descanso. De bõnus, coloco sempre nas observações de cada exercício, a forma que preciso que você execute aquele movimento, para ficar o mais seguro e eficaz possível!"
    }
  ])

  return (
    <div className="w-full max-w-3xl flex flex-col justify-center items-center">
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
