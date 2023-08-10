import { ReactNode } from "react";

type H2Props = {
  children: ReactNode
}
const H2 = ({ children }: H2Props) => {
  return (
    <h2 className="font-bold text-brandWhite text-3xl">
      {children}
    </h2>
  )
}

export default H2
