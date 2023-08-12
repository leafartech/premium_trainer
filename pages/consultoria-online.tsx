import { StarIcon, UserIcon } from "@heroicons/react/24/outline"
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
        imageHeaderPath="1"
      >
        <H2>
          <span className="text-brandRed-500">Alcance</span> o seu potencial
          máximo
        </H2>
      </Header>
      <main>
        <Section>
          <div></div>
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
          <H2>Foco da consultoria</H2>
          <div className="my-2">
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
          </div>
          <div className="w-full md:max-w-xs">
            <ButtonCTA>
              <Link href="/">Quero saber mais!</Link>
            </ButtonCTA>
          </div>
        </Section>
        <Section>
          <PurchaseCard
            titleCard="Consultoria Online"
            descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
            valueOff="999"
            valueOn="999"
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

export default ConsultoriaOnline
