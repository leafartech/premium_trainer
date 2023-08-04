import FAQ from "components/FAQ"
import Footer from "components/Footer"
import Header from "components/Header"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header
        topTitle="TREINADOR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
        ctaText="QUERO SABER MAIS"
        ctaHref="#produtos"
        imagePath="1"
      >
        Te ajudo a conquistar o <span className="text-red-500">shape dos seus sonhos</span>
      </ Header>
      <main>

      </main>
      {/* <FAQ />
      <Footer /> */}
    </div>
  )
}

export default Home
