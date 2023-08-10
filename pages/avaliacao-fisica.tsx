import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import PurchaseCard from "components/PurchaseCard"
import Quote from "components/Quote"
import SecondBox from "components/SecondBox"
import SecondCard from "components/SecondCard"
import Section from "components/Section"
import TimeLine from "components/TimeLine"

const AvaliacaoFisica = () => {
  const secondCardDataTitles = [
    "Quer começar a treinar.",
    "Busca qualidade de vida e saúde.",
    "Precisa de um acompanhamento.",
    "Procura melhorar a perfomance física e mental."
  ]
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="Avaliação Física"
        ctaText="Quero uma estratégia personalizada!"
        ctaHref="/consultoria-presencial"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos? Cum rerum labore maxime velit nemo sequi, repudiandae dolore voluptas, ipsum laborum incidunt! Amet blanditiis obcaecati hic vero, enim quaerat."
        imageHeaderPath="3"
      >
        <H2>
          <span className="text-brandRed-500">Vamos</span> pra cimaaaaaaa!
        </H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex flex-col gap-1">
            <H2>
              Como a <span className="text-brandRed-500">consultoria</span>{" "}
              funciona
            </H2>
            <h4 className="text-zinc-300">
              Para entender melhor, confira esta linha do tempo abaixo:{" "}
            </h4>
          </div>
          <TimeLine />
        </Section>
        <Section>
          <div className="mb-2">
            <H2>
              Ele é <span className="text-brandRed-500">ideal</span> para você
              que:
            </H2>
            <div className="mt-4">
              {secondCardDataTitles.map((title, index) => (
                <SecondCard key={index} title={title} />
              ))}
            </div>
          </div>
        </Section>
        <Section>
          <PurchaseCard
            titleCard="Avaliação Física"
            descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
            valueOff="999"
            valueOn="999"
          />
        </Section>
        <Section>
          <SecondBox titleBox="19" descriptionBox="blablabla" />
          <div className="w-full">
            <Quote
              firstWord="Estarei"
              Citation="te acompanhando de perto durante todo o processo e vou te ajudar para que alcance os seus objetivos da melhor forma possível com base em estudos. Bora pra cima!!!!"
            />
          </div>
        </Section>
        <Section>
          <span className="w-full text-center">
            <H2>
              <span className="tracking-[12px]">FAQ</span>
            </H2>
          </span>
          <FAQ />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default AvaliacaoFisica
