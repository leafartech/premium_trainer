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
import { AcademicCapIcon, ClipboardDocumentListIcon, TrophyIcon, ClipboardDocumentCheckIcon, PresentationChartLineIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import MySwiper from "components/MySwiper"

const Home = () => {
  const cardData = [
    {
      icon: <AcademicCapIcon className="h-9 w-9" />,
      title: "Formação Acadêmica",
      description: "Bacharelado em educação física.",
    },
    {
      icon: <ClipboardDocumentListIcon className="h-9 w-9" />,
      title: "Experiência na área",
      description: "Atuante na área há mais de 8 anos.",
    },
    // {
    //   icon: "",
    //   title: "Extracursos",
    //   description: "lorem fsnjfbjdbfkjbsdnjkgnjsdng",
    // },
  ]


  const secondCardDataTitles = [
    "Quer vencer a depressão e curar sua ansiedade.",
    "Preza por saúde e qualidade de vida",
    "Quer conquistar o shape do seu sonho.",
    "Busca produtividade no dia a dia",
    "Quer tratamento de lesões + reabilitação",
  ]


  return (
    <div className="overflow-hidden">
      <Header
        topTitle="treinador"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
        ctaText="Quero saber mais!"
        ctaHref="#produtos"
        imageHeaderPath="1"
      >
        {/* PASSAR COMO CHILDREN PARA MANIPULAR MAIS FACILMENTE AS CORES */}
        <H2>Te ajudo a conquistar o <span className="text-brandRed-500">shape dos seus sonhos</span></H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex justify-center">
            <img
              className="w-myLg mt-3 md:w-myXl"
              src="images/bg1.png"
              alt="Foto do João Navarro"
            />
          </div>
          <div className="w-full px-1 lg:hidden">
            <MiniBox text="treinador" />
          </div>
          <div className="my-4">
            <H2>Quem é João Navarro</H2>
          </div>
          <p className="text-zinc-300 text-justify max-w-2xl">
            Apaixonado por saúde e beme estar. Com bacharelado em
            educação física e mais de 8 anos de experiẽncia no mundo
            do treinamento, ele é um profissional dedicado e
            compromissado com o sucesso de seus alunos.{" "}
          </p>
          <div className="my-3">
            {cardData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="w-full md:max-w-xs">
            <ButtonCTA>
              <Link href="/">Quero saber mais!</Link>
            </ButtonCTA>
          </div>
        </Section>
        <Section>
          <div className="w-full">
            <img
              className="w-myLg md:w-myXl"
              src="images/bg1.png"
              alt="Foto do João Navarro"
            />
          </div>
          <div className="mb-2">
            <H2>O meu trabalho é ideal para <span className="text-brandRed-500">você que:</span></H2>
            <div className="mt-4">
              {secondCardDataTitles.map((title, index) => (
                <SecondCard key={index} title={title} />
              ))}
            </div>
          </div>
          <Quote firstWord="Lorem" Citation="ipsum dolor sit amet consectetur adipisicing elit. Placeat id voluptas natus obcaecati reiciendis nobis reprehenderit inventore in incidunt, omnis earum molestias molestiae illo! Praesentium a qui ullam odio rerum." />
          <div className="w-full md:max-w-xs mt-6">
            <ButtonCTA>
              <Link href="/">Quero saber mais!</Link>
            </ButtonCTA>
          </div>
        </Section>
        {/* <Section> */}
          {/* <H2>Transforme sua vida com resultados reais</H2> */}
          {/* <Quote firstWord="Lorem" Citation="ipsum dolor sit amet consectetur adipisicing elit. Placeat id voluptas natus obcaecati reiciendis nobis reprehenderit inventore in incidunt, omnis earum molestias molestiae illo! Praesentium a qui ullam odio rerum." />
          <div className="w-full md:max-w-xs mt-2">
            <ButtonCTA>
              <Link href="/">Quero saber mais!</Link>
            </ButtonCTA>
          </div> */}
        {/* </Section> */}
        <Section>
          <H2>Confira alguns <span className="text-brandRed-500">feedbacks</span></H2>
          <MySwiper />
        </Section>
        <Section>
          <H2>Por que meus alunos têm tantos <span className="text-brandRed-500">resultados?</span></H2>
          <div className="flex flex-col gap-6 mt-4">
            <Box
              icon={<TrophyIcon className="w-8 h-8" />}
              boxTitle="Identificação dos objetivos"
              boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
            />
            <Box
              icon={<ClipboardDocumentCheckIcon className="w-8 h-8" />}
              boxTitle="Identificação dos objetivos"
              boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
            />
            <Box
              icon={<PresentationChartLineIcon className="w-8 h-8" />}
              boxTitle="Identificação dos objetivos"
              boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
            />
            <Box
              icon={<ArrowPathRoundedSquareIcon className="w-8 h-8" />}
              boxTitle="Identificação dos objetivos"
              boxDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi adipisci consequuntur perspiciatis quia sed."
            />
          </div>
          <div className="mt-9">
            <ButtonCTA>Quero saber mais</ButtonCTA>
          </div>
        </Section>
        <Section>
          <div className="mb-6">
            <Quote firstWord="Todos" Citation="esses resultados acima são frutos de muito trabalho e dedicação de ambas as partes. Fora isso, o desenvolvimento de uma estratégia adaptada e específica para cada aluno foi um grande pilar no progresso geral." />
          </div>
          <ComparisionBox />
        </Section>
        <Section>

          <H2>Conheça <span className="text-brandRed-500">meus serviços</span></H2>
          <div className="mt-4">
            <ServicesBox />
          </div>
        </Section>
        <Section>
          <span className="w-full text-center">
            <H2><span className="tracking-[12px]">FAQ</span></H2>
          </span>
          <FAQ />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
