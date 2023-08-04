import { ReactNode } from "react"

type SectionProps = {
    children: ReactNode
}

const Section = ({ children}: SectionProps) => {
    return (
        <section className="w-full">
            <div className="max-w-my">
                {children}
            </div>
        </section>
    )
}

export default Section