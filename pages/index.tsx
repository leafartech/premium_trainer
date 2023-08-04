import Card from "components/Card"
import FAQ from "components/FAQ"
import Footer from "components/Footer"
import Header from "components/Header"
import MiniBox from "components/MiniBox"
import Section from "components/Section"
import { AirFreshener, AddDocument, AlignLeft } from "react-flaticons";



const Home = () => {
  const cardData = [{
    icon: <AirFreshener  size={24} />,
    title: "Formação Acadêmica",
    description: "lorem fsnjfbjdbfkjbsdnjkgnjsdng"
  },{
    icon: <AddDocument size={24} />,
    title: "Experiẽncia na área",
    description: "lorem fsnjfbjdbfkjbsdnjkgnjsdng"
  },{
    icon: <AlignLeft size={24} />,
    title: "Total de clientes",
    description: "lorem fsnjfbjdbfkjbsdnjkgnjsdng"
  },]

  return (
    <div className="overflow-hidden">
      <Header
        topTitle="TREINADOR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
        ctaText="QUERO SABER MAIS"
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
              className="w-full"
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
          <p className="text-brandWhite">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum odit, vitae excepturi tempore numquam dolorem alias explicabo vero. Est unde saepe optio! Repellat, atque quae accusantium natus itaque quam cumque.</p>
          <div>
            
          </div>
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
