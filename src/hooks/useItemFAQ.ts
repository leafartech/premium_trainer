import { useState } from "react"
import { FAQProps } from "../../types/faqProps"

const useItemFAQ = ({ ...data }: FAQProps) => {
  const [item, setItem] = useState(data)
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1
    setItem({ ...item, active: newActive })
  }

  return {
    item,
    handleToggleActive
  }
}

export default useItemFAQ
