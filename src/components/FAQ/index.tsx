import { FaChevronDown } from "react-icons/fa6"

const FAQ = () => {
  return(
    <section className="w-full flex flex-col">
      <article className="border-b-4 border-b-brandRed-400 flex justify-between items-center p-3">
        <h3 className="text-brandWhite">Dúvida?</h3>
        <FaChevronDown size={20} className="text-brandWhite" />
      </article>
    </section>
  )
}
export default FAQ