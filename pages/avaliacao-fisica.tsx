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
        ctaText="Quero comprar agora"
        ctaHref="#produto"
        description="Obtenha detalhes precisos sobre seu condicionamento físico com nossa Avaliação Física Profissional."
        imageHeaderPath="avaliacao-fisica"
      >
        <H2 header={true}>
          <span className="text-brandRed-500">Mapeando o físico:</span> conheça o seu corpo!
        </H2>
      </Header>
      <main>
        <Section>
          <div className="w-full flex flex-col gap-1 mt-3 mb-6">
            <H2 center={true}>
              Como a <span className="text-brandRed-500">avaliação</span>{" "}
              funciona
            </H2>
            <h4 className="text-zinc-300 md:text-center">
              Para entender melhor, confira esta linha do tempo abaixo:{" "}
            </h4>
          </div>
          <TimeLine
            txt1={{ title: 'Agendamento simplificado', description: 'Em menos de 3 minutos, você consegue agendar a melhor data para você utilizando nosso sistema inteligente.' }}
            txt2={{ title: 'Avaliação', description: 'Realizaremos uma dupla avaliação física (bioimpedância e antropométrica) para termos uma referência inicial.' }}
            txt3={{ title: 'Relatório', description: 'Um relatório de toda a avaliação é entregue para que o guarde consigo como referência do seu físico atual.' }}
          />
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
          <div className="w-full flex items-center justify-center mt-12">
            <img src="./images/allPages.png" className="" alt="" />
          </div>
        </Section>
        <span id="produto"></span>
        <Section>
          <PurchaseCard
            titleCard="Avaliação Física"
            descriptionCard="Ideal para você que busca uma estratégia individualizada e específica para os seus objetivos"
            valueOff="199"
            valueOn="120"
            hrefList={['https://pay.kiwify.com.br/FCBG4ig']}
          />
        </Section>
        <Section>
          <SecondBox titleBox="9" descriptionBox="Anos transformando vidas" />
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

export default AvaliacaoFisica
