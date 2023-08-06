import ButtonCTA from "components/ButtonCTA"
import Card from "components/Card"
import FAQ from "components/FAQ"
import Footer from "components/Footer"
import H2 from "components/H2"
import Header from "components/Header"
import MiniBox from "components/MiniBox"
import Quote from "components/Quote"
import SecondCard from "components/SecondCard"
import Section from "components/Section"
import Link from "next/link"
import { FaGraduationCap, FaBusinessTime } from "react-icons/fa6"

const Home = () => {
  const cardData = [
    {
      icon: <FaGraduationCap size={30} />,
      title: "Formação Acadêmica",
      description: "Bacharelado em educação física.",
    },
    {
      icon: <FaBusinessTime size={30} />,
      title: "Experiẽncia na área",
      description: "Atuante na área há mais de 8 anos.",
    },
    {
      icon: "",
      title: "Total de clientes",
      description: "lorem fsnjfbjdbfkjbsdnjkgnjsdng",
    },
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
        Te ajudo a conquistar o{" "}
        <span className="text-brandRed-500">
          shape dos seus sonhos
        </span>
      </Header>
      <main>
        <Section>
          <div className="w-full space-y-2">
            <img
              className="w-myLg md:w-myXl"
              src="images/bg1.png"
              alt="Foto do João Navarro"
            />
          </div>
          <div className="w-full px-1 lg:hidden">
            <MiniBox text="treinador" />
          </div>
          <H2 textWhite="Quem é" textRed="João Navarro" />
          <p className="text-brandWhite text-justify max-w-2xl">
            Apaixonado por saúde e beme estar. Com bacharelado em
            educação física e mais de 8 anos de experiẽncia no mundo
            do treinamento, ele é um profissional dedicado e
            compromissado com o sucesso de seus alunos.{" "}
          </p>
          {cardData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
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
          <H2
            textWhite="O meu trabalho é ideal para"
            textRed="você que:"
          />
          {secondCardDataTitles.map((title, index) => (
            <SecondCard key={index} title={title} />
          ))}
        </Section>
      </main>
      <Section>
        <H2 textWhite="Headline com" textRed="texto vermelho" />
        <Quote Citation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id voluptas natus obcaecati reiciendis nobis reprehenderit inventore in incidunt, omnis earum molestias molestiae illo! Praesentium a qui ullam odio rerum." />
      </Section>
      {/* <FAQ />
      <Footer /> */}
    </div>
  )
}

export default Home
