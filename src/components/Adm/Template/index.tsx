import { ReactNode } from "react"

interface TemplateProps {
  children: ReactNode
  subtitle: string
}

const Template = ({ children, subtitle }: TemplateProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-brandWhite text-lg font-medium">{subtitle}</h4>
      {children}
    </div>
  )
}

export default Template
