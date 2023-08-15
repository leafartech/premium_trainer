import { StarIcon, UserIcon, BoltIcon } from "@heroicons/react/24/outline"
import ButtonCTA from "components/ButtonCTA"
import Card from "components/Card"
import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import PurchaseCard from "components/PurchaseCard"
import Quote from "components/Quote"
import SecondBox from "components/SecondBox"
import Section from "components/Section"
import TimeLine from "components/TimeLine"
import Link from "next/link"

const ConsultoriaOnline = () => {
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="Consultoria Online"
        ctaText="Venha Fazer Parte!"
        ctaHref="/consultoria-online"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos? Cum rerum labore maxime velit nemo sequi, repudiandae dolore voluptas, ipsum laborum incidunt! Amet blanditiis obcaecati hic vero, enim quaerat."
        imageHeaderPath="consultoria-online"
      >
        <H2 header={true}>
          <span className="text-brandRed-500">Alcance</span> o seu potencial
          máximo
        </H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex flex-col gap-1 mt-3 mb-6">
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
          <H2 center={true}>Foco da consultoria</H2>
          <div className="w-full flex flex-col md:flex-row md:gap-10 mt-2">
            <Card
              Icon={UserIcon}
              title="Formação Acadêmica"
              description="Bacharelado em educação física."
            />
            <Card
              Icon={StarIcon}
              title="experiencia na área"
              description="blblalbllallblalblalbllalba"
            />
            <Card
              Icon={BoltIcon}
              title="experiencia na área"
              description="blblalbllallblalblalbllalba"
            />
          </div>
        </Section>
        <Section>
          <PurchaseCard
            titleCard="Consultoria Online"
            descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
            valueOff="220"
            valueOn="180"
          />
        </Section>
        <Section>
          <SecondBox titleBox="50" descriptionBox="Anos transformando vidas" />
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
    </div>
  )
}

export default ConsultoriaOnline
