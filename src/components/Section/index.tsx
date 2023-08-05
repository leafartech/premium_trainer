import { ReactNode } from "react"

type SectionProps = {
    children: ReactNode
}

const Section = ({ children}: SectionProps) => {
    return (
        <section className="w-full flex flex-col md:items-center md:justify-center">
            <div className="max-w-7xl">
                {children}
            </div>
        </section>
    )
}

export default Section