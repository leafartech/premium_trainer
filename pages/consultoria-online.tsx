import H2 from "components/H2"
import Header from "components/Header"

const ConsultoriaOnline = () => {
  return (
    <>
      <Header
        topTitle="Consultoria Online"
        ctaText="Venha Fazer Parte!"
        ctaHref="/consultoria-online"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos? Cum rerum labore maxime velit nemo sequi, repudiandae dolore voluptas, ipsum laborum incidunt! Amet blanditiis obcaecati hic vero, enim quaerat."
        imageHeaderPath="1"
      >
        <H2>
          <span className="text-brandRed-500">Alcance</span> o seu potencial máximo
        </H2>
          
      </Header>
    </>
  )
}

export default ConsultoriaOnline