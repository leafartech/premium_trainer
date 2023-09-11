import { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="w-full flex flex-col md:items-center md:justify-center px-2">
      <div className="max-w-my2Xl md:mb-12 md:mt-4 mb-4 mt-2 py-2 sm:px-6">{children}</div>
    </section>
  )
}

export default Section
