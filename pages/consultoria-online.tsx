import H2 from "components/H2"
import Header from "components/Header"

const ConsultoriaOnline = () => {
  return (
    <>
      <Header
        topTitle="Consultoria Online"
        ctaText="Venha Fazer Parte!"
        ctaHref="/consultoria-presencial"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos? Cum rerum labore maxime velit nemo sequi, repudiandae dolore voluptas, ipsum laborum incidunt! Amet blanditiis obcaecati hic vero, enim quaerat."
        imageHeaderPath="1"
      >
        <H2
          textWhite="Te ajudo a conquistar"
          textRed="O shape dos seus sonhos"
        />
      </Header>
    </>
  )
}

export default ConsultoriaOnline