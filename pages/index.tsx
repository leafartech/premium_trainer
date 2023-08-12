import Box from "components/Box"
import ButtonCTA from "components/ButtonCTA"
import Card from "components/Card"
import ComparisionBox from "components/ComparasionBox"
import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import MiniBox from "components/MiniBox"
import Quote from "components/Quote"
import SecondCard from "components/SecondCard"
import Section from "components/Section"
import ServicesBox from "components/ServicesBox"
import Link from "next/link"
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartLineIcon,
  ArrowPathRoundedSquareIcon,
  BugAntIcon
} from "@heroicons/react/24/outline"
import MySwiper from "components/MySwiper"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="treinador"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
        ctaText="Quero saber mais!"
        ctaHref="#produtos"
        imageHeaderPath="inicio"
      >
        <H2 header={true}>
          Te ajudo a conquistar o{" "}
          <span className="text-brandRed-500">shape dos seus sonhos</span>
        </H2>
      </Header>
      <main className="sm:-mt-16">
        <Section>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-center md:hidden">
              <img
                className="w-myLg mt-3 rounded-md"
                src="./images/inicio0.png"
                alt="Foto do João Navarro"
              />
            </div>
            <div className="w-full mt-4 md:mt-0 px-1 md:flex md:justify-center">
              <MiniBox text="treinador" />
            </div>
            <div className="my-4 md:text-center">
              <H2 center={true}>Quem é João Navarro</H2>
            </div>
            <p className="text-zinc-300 text-justify max-w-4xl md:text-xl md:text-center">
              Apaixonado por saúde e bem estar. Com bacharelado em educação
              física e mais de 8 anos de experiẽncia no mundo do treinamento,
              ele é um profissional dedicado e compromissado com o sucesso de
              seus alunos.{" "}
            </p>
            <div className="w-full hidden md:justify-center md:flex">
              <img
                className="w-myLg mt-3 max-w-2xl mb-4"
                src="./images/inicio0.png"
                alt="Foto do João Navarro"
              />
            </div>
            <div className="py-3 gap-4 w-full flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-10">
              <Card
                Icon={AcademicCapIcon}
                title="Formação Acadêmica"
                description="Formado em Educação Física."
              />
              <Card
                Icon={ClipboardDocumentListIcon}
                title="Experiência na Área"
                description="Atuante há mais de 8 anos."
              />
              <Card
                Icon={BugAntIcon}
                title="Experiência na Área"
                description="Atuante há mais de 8 anos."
              />
            </div>
            <div className="w-full md:hidden">
              <ButtonCTA>
                <Link href="/">Quero saber mais!</Link>
              </ButtonCTA>
            </div>
          </div>
        </Section>
        <div className="hidden md:block line-gradient h-1"></div>
        <Section>
          <div className="w-full md:hidden">
            <img
              className="w-myLg md:w-myXl mb-4"
              src="./images/inicio2.png"
              alt="Foto do João Navarro"
            />
          </div>
          <div className="md:text-center">
            <H2 center={true}>
              O meu trabalho é ideal para{" "}
              <span className="text-brandRed-500">você que:</span>
            </H2>
            <div className="sm:mt-16 sm:mb-24 flex flex-col md:flex-row items-start sm:justify-center sm:items-center sm:gap-12">
              <div>
                <SecondCard title="Quer vencer a depressão e a ansiedade." />
                <SecondCard title="Preza por saúde e qualidade de vida." />
                <SecondCard title="Quer conquistar o shape do seus sonhos." />
              </div>
              <div>
                <SecondCard title="Busca produtividade no dia a dia." />
                <SecondCard title="Quer tratamento de lesões." />
                <SecondCard title="Quer uma reabilitação mais segura." />
              </div>
            </div>
          </div>
          <div className="w-full md:flex md:gap-5 md:justify-between md:mt-4 md:items-center mt-6">
            <div className="md:flex md:flex-col md:items-start">
              <H2>
                Mude sua vida <span className="text-brandRed-500">hoje!</span>
              </H2>
              <Quote
                firstWord="A"
                Citation="prioridade do meu trabalho é cuidarmos da sua saúde de forma responsável! Através de uma abordagem individualizada, eu consigo proporcionar treinamentos de excelência, contribuindo para uma qualidade de vida e sensação de bem-estar excepcionais em sua vida!"
              />
              <div className="w-full sm:max-w-[256px] md:mt-2 mt-6">
                <ButtonCTA>
                  <Link href="/">Quero saber mais!</Link>
                </ButtonCTA>
              </div>
            </div>
            <div className="w-full sm:max-w-[540px]">
              <img
                className="w-myLg md:w-myXl mt-4"
                src="./images/inicio3.png"
                alt="Foto do João Navarro"
              />
            </div>
          </div>
        </Section>
        <Section>
          <H2 center={true}>
            Confira alguns <span className="text-brandRed-500">feedbacks</span>
          </H2>
          <div className="px-4">
            <MySwiper />
          </div>
        </Section>
        <Section>
          <div className="md:flex md:flex-col md:justify-center md:items-center sm:mb-12">
            <div className="md:text-center">
              <H2>
                Por que meus alunos têm tantos{" "}
                <span className="text-brandRed-500">resultados?</span>
              </H2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 sm:mt-12">
              <div className="flex flex-col gap-4">
                <Box
                  // icon={<TrophyIcon  />}
                  Icon={TrophyIcon}
                  boxTitle="Identificação dos objetivos"
                  boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
                />
                <Box
                  Icon={ClipboardDocumentCheckIcon}
                  boxTitle="Avaliações"
                  boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
                />
              </div>
              <div className="flex flex-col gap-4 md:mt-4">
                <Box
                  Icon={PresentationChartLineIcon}
                  boxTitle="Periodização"
                  boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
                />
                <Box
                  Icon={ArrowPathRoundedSquareIcon}
                  boxTitle="Reavaliação"
                  boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
                />
              </div>
            </div>
            <div className="mt-9 w-full max-w-lg md:flex md:justify-center md:items-center">
              <ButtonCTA>Quero saber mais</ButtonCTA>
            </div>
          </div>
        </Section>
        <Section>
          <div className="mb-6 md:hidden">
            <Quote
              firstWord="Todos"
              Citation="esses resultados acima são frutos de muito trabalho e dedicação de ambas as partes. Fora isso, o desenvolvimento de uma estratégia adaptada e específica para cada aluno foi um grande pilar no progresso geral."
            />
          </div>
          <ComparisionBox />
        </Section>
        <Section>
          <div className="md:text-center" id="produtos">
            <H2 center={true}>
              Conheça <span className="text-brandRed-500">meus serviços</span>
            </H2>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 justify-center items-center mt-6">
            <ServicesBox
              href="/consultoria-presencial"
              product="Consultoria Presencial"
              bottomSentence="Sua melhor forma"
            />
            <ServicesBox
              href="/consultoria-online"
              product="Consultoria Online"
              bottomSentence="MUDE, TREINE, SUPERE"
            />
            <ServicesBox
              href="/avaliacao-fisica"
              product="Avalição Física"
              bottomSentence="MOLDANDO SEU FÍSICO"
            />
          </div>
        </Section>
        <Section>
          <span className="w-full text-center">
            <H2 center={true}>
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

export default Home
