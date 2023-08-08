import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import Section from "components/Section"
import TimeLine from "components/TimeLine"

const ConsultoriaPresencial = () => {
  return (
    <>
      <Header
        topTitle="Consultoria Presencial"
        ctaText="Quero uma estratégia personalizada!"
        ctaHref="/consultoria-presencial"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos? Cum rerum labore maxime velit nemo sequi, repudiandae dolore voluptas, ipsum laborum incidunt! Amet blanditiis obcaecati hic vero, enim quaerat."
        imageHeaderPath="1"
      >
        <H2
          textWhite="o seu pontecial máximo!"
          textRed="Alcance"
        />
      </Header>
      <main>
        <Section>
          <TimeLine />
        </Section>
      </main>
      <FAQ />
      <Footer />
    </>
  )
}

export default ConsultoriaPresencial
