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
    <>
      <Header
        topTitle="Avaliação Física"
        ctaText="Quero comprar agora!"
        ctaHref="https://navarro.pay.yampi.com.br/r/I0UK1LE9D2"
        description="Comece sua jornada com uma avaliação completa. Entendendo suas necessidades e objetivos, criaremos um plano personalizado para ajudá-lo a atingir o equilíbrio e a saúde que deseja."
        imageHeaderPath="avaliacao-fisica"
      >
        <H2 header={true}>
          <span className="text-brandRed-500">Vamos</span> pra cimaaaaaaa!
        </H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex flex-col gap-1">
            <H2 center={true}>
              Como a <span className="text-brandRed-500">consultoria</span>{" "}
              funciona
            </H2>
            <h4 className="text-zinc-300 md:text-center">
              Para entender melhor, confira esta linha do tempo abaixo:{" "}
            </h4>
          </div>
          <TimeLine />
        </Section>
        <Section>
          <div className="mb-2">
            <H2 center={true}>
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
            valueOff="199"
            valueOn="120"
            href="https://navarro.pay.yampi.com.br/r/I0UK1LE9D2"
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
          <h2 className="tracking-[12px] text-center text-2xl sm:text-4xl text-brandWhite">
            FAQ
          </h2>
          <FAQ />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default AvaliacaoFisica
