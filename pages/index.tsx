import Card from "components/Card"
import FAQ from "components/FAQ"
import Footer from "components/Footer"
import Header from "components/Header"
import MiniBox from "components/MiniBox"
import Section from "components/Section"
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
          <div className="w-full">
            <img
              className="w-myLg md:w-myXl"
              src="images/bg1.png"
              alt="Foto do João Navarro"
            />
          </div>
          <div className="w-full px-1 lg:hidden">
            <MiniBox text="treinador" />
          </div>
          <h2 className="font-bold text-brandWhite text-3xl">
            Quem é João Navarro?
          </h2>
          <p className="text-brandWhite">
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
        </Section>
      </main>
      {/* <FAQ />
      <Footer /> */}
    </div>
  )
}

export default Home
