import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import QUESTS from '@/constants/quests'

const FAQ = () => {
  return (
    <Accordion type="multiple" className="w-full sm:w-[1000px]">
      {QUESTS.map((quest, index) => (
        <AccordionItem key={index} value={`${index}`}>
          <AccordionTrigger>{quest.question}</AccordionTrigger>
          <AccordionContent>{quest.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FAQ
