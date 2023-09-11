import { ReactNode } from "react";

type H2Props = {
  children: ReactNode
  header?: boolean
  center?: boolean
}
const H2 = ({ children, header, center }: H2Props) => {
  return (
    <h2 className={`font-bold text-brandWhite ${center ? 'sm:text-center' : 'text-left'} ${header ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'}`}>
      {children}
    </h2>
  )
}

export default H2
